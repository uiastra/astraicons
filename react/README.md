# Astra Icons

<p align="center">
  <a href="https://uiastra.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uiastra/astraicons/HEAD/.github/dark.jpg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/uiastra/astraicons/HEAD/.github/light.jpg">
      <img alt="AstraIcons" style="max-width: 100%" src="https://raw.githubusercontent.com/uiastra/astraicons/HEAD/.github/light.jpg">
    </picture>
  </a>
</p>

## Getting Started

Begin by installing `@astraicons/react` from npm:

```sh
npm install @astraicons/react
```

Then import each icon individually as a React component:

```js
import { GlobalIcon } from "@astraicons/react/linear";

function MyComponent() {
  return (
    <div>
      <GlobalIcon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  );
}
```

The 24x24 linear icons can be imported from `@astraicons/react/linear`, the 24x24 bold icons from `@astraicons/react/bold`, and the 24x24 brand icons from `@astraicons/react/brand`.

Icons are named using upper camel case and always end with `Icon`.

[View the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@astraicons/react/linear/)

## Contributing

While we welcome contributions to enhance the project, our current focus is on resolving issues like incorrect TypeScript types or improperly exported icons.

**Please note that we are not accepting contributions for new icons.**

## Credit

This project uses parts from the [HeroIcons](https://github.com/tailwindlabs/heroicons) library from [TailwindLabs](https://github.com/tailwindlabs).

## License

This library is released under the MIT license.
