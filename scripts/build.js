import { promises as fs } from "node:fs";
import camelcase from "camelcase";
import { rimraf } from "rimraf";
import { transform as svgr } from "@svgr/core";
import * as babel from "@babel/core";
import { compile as compileVue } from "@vue/compiler-dom";
import { dirname } from "node:path";
import { deprecated } from "./deprecated.js";

let transform = {
  react: async (svg, componentName, format, isDeprecated) => {
    let component = await svgr(
      svg,
      { 
        plugins: ['@svgr/plugin-jsx'],
        ref: true, 
        titleProp: true 
      },
      { componentName }
    );
    let { code } = await babel.transformAsync(component, {
      plugins: [
        ["@babel/plugin-transform-react-jsx", { useBuiltIns: true }],
      ],
    });

    // Add a deprecation warning to the component
    if (isDeprecated) {
      /** @type {string[]} */
      let lines = code.split("\n");
      lines.splice(1, 0, `/** @deprecated */`);
      code = lines.join("\n");
    }

    if (format === "esm") {
      return code;
    }

    return code
      .replace(
        'import * as React from "react"',
        'const React = require("react")'
      )
      .replace(
        'import { forwardRef } from "react"',
        'const { forwardRef } = require("react")'
      )
      .replace("export default", "module.exports =");
  },
  vue: (svg, componentName, format, isDeprecated) => {
    let { code } = compileVue(svg, {
      mode: "module",
    });

    // Add a deprecation warning to the component
    if (isDeprecated) {
      /** @type {string[]} */
      let lines = code.split("\n");
      lines.splice(2, 0, `/** @deprecated */`);
      code = lines.join("\n");
    }

    if (format === "esm") {
      return code.replace("export function", "export default function");
    }

    return code
      .replace(
        /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
        (_match, imports, _quote, mod) => {
          let newImports = imports
            .split(",")
            .map((i) => i.trim().replace(/\s+as\s+/, ": "))
            .join(", ");

          return `const { ${newImports} } = require("${mod}")`;
        }
      )
      .replace("export function render", "module.exports = function render");
  },
};

async function getIcons(style) {
  let files = await fs.readdir(`./optimized/${style}`);
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./optimized/${style}/${file}`, "utf8"),
      componentName: `${camelcase(file.replace(/\.svg$/, ""), {
        pascalCase: true,
      })}Icon`,
      isDeprecated: deprecated.includes(file),
    }))
  );
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? ".js" : "";
      if (format === "esm") {
        return `export { default as ${componentName} } from './${componentName}${extension}'`;
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`;
    })
    .join("\n");
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2) + "\n");
}

async function buildIcons(packageName, style, format) {
  let outDir = `./${packageName}/${style}`;
  if (format === "esm") {
    outDir += "/esm";
  }

  let icons = await getIcons(style);

  await Promise.all(
    icons.flatMap(async ({ componentName, svg, isDeprecated }) => {
      let content = await transform[packageName](
        svg,
        componentName,
        format,
        isDeprecated
      );

      /** @type {string[]} */
      let types = [];

      if (packageName === "react") {
        types.push(`import * as React from 'react';`);
        if (isDeprecated) {
          types.push(`/** @deprecated */`);
        }
        types.push(
          `declare const ${componentName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;`
        );
        types.push(`export default ${componentName};`);
      } else {
        types.push(
          `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';`
        );
        if (isDeprecated) {
          types.push(`/** @deprecated */`);
        }
        types.push(
          `declare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;`
        );
        types.push(`export default ${componentName};`);
      }

      return [
        ensureWrite(`${outDir}/${componentName}.js`, content),
        ...(types
          ? [
              ensureWrite(
                `${outDir}/${componentName}.d.ts`,
                types.join("\n") + "\n"
              ),
            ]
          : []),
      ];
    })
  );

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format));

  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, "esm", false));
}

/**
 * @param {string[]} styles
 */
async function buildExports(styles) {
  let pkg = {};

  // To appease Vite's optimizeDeps feature which requires a root-level import
  pkg[`.`] = {
    import: `./index.esm.js`,
    require: `./index.js`,
  };

  // For those that want to read the version from package.json
  pkg[`./package.json`] = { default: "./package.json" };

  // Explicit exports for each style:
  for (let style of styles) {
    pkg[`./${style}`] = {
      types: `./${style}/index.d.ts`,
      import: `./${style}/esm/index.js`,
      require: `./${style}/index.js`,
    };
    pkg[`./${style}/*`] = {
      types: `./${style}/*.d.ts`,
      import: `./${style}/esm/*.js`,
      require: `./${style}/*.js`,
    };
    pkg[`./${style}/*.js`] = {
      types: `./${style}/*.d.ts`,
      import: `./${style}/esm/*.js`,
      require: `./${style}/*.js`,
    };
  }

  return pkg;
}

async function main(packageName) {
  const cjsPackageJson = { module: "./esm/index.js", sideEffects: false };
  const esmPackageJson = { type: "module", sideEffects: false };

  console.log(`Building ${packageName} package...`);

  await Promise.all([
    rimraf(`./${packageName}/brand/*`),
    rimraf(`./${packageName}/duo-tone/*`),
    rimraf(`./${packageName}/bold/*`),
    rimraf(`./${packageName}/linear/*`),
  ]);

  await Promise.all([
    buildIcons(packageName, "brand", "cjs"),
    buildIcons(packageName, "brand", "esm"),
    buildIcons(packageName, "bold", "cjs"),
    buildIcons(packageName, "bold", "esm"),
    buildIcons(packageName, "linear", "cjs"),
    buildIcons(packageName, "linear", "esm"),
    buildIcons(packageName, "duotone", "cjs"),
    buildIcons(packageName, "duotone", "esm"),
    ensureWriteJson(`./${packageName}/brand/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${packageName}/brand/package.json`, cjsPackageJson),
    ensureWriteJson(`./${packageName}/bold/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${packageName}/bold/package.json`, cjsPackageJson),
    ensureWriteJson(`./${packageName}/linear/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${packageName}/linear/package.json`, cjsPackageJson),
    ensureWriteJson(`./${packageName}/duotone/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${packageName}/duotone/package.json`, cjsPackageJson),
  ]);

  let packageJson = JSON.parse(
    await fs.readFile(`./${packageName}/package.json`, "utf8")
  );

  packageJson.exports = await buildExports([
    "brand",
    "bold",
    "linear",
    "duotone",
  ]);

  await ensureWriteJson(`./${packageName}/package.json`, packageJson);

  return console.log(`Finished building ${packageName} package.`);
}

let [packageName] = process.argv.slice(2);

if (!packageName) {
  throw new Error("Please specify a package");
}

main(packageName);
