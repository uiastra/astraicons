// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

module.exports = new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === "__esModule") {
        return {};
      }

      throw new Error(
        `Importing from \`@astraicons/vue\` directly is not supported. Please import from either \`@astraicons/vue/bold\`, \`@astraicons/vue/linear\`, \`@astraicons/vue/duotone\`, or \`@astraicons/vue/brand\` instead.`
      );
    },
  }
);
