export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
        },
      },
    },
    'removeDimensions',
    'sortAttrs',
    'cleanupListOfValues',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
        ],
      },
    },
  ],
}
