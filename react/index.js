// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

module.exports = new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === "__esModule") {
        return {};
      }

      throw new Error(
        `Importing from \`@astraicons/react\` directly is not supported. Please import from either \`@astraicons/react/bold\`, \`@astraicons/react/linear\`, \`@astraicons/react/duotone\`, or \`@astraicons/react/brand\` instead.`
      );
    },
  }
);
