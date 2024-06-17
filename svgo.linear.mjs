export default {
  plugins: [
    "preset-default",
    "removeDimensions",
    "sortAttrs",
    "cleanupListOfValues",
    {
      name: "removeAttrs",
      params: {
        attrs: [
          "stroke",
          "path:stroke-width",
          "rect:stroke-width",
          "circle:stroke-width",
        ],
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            "stroke-width": "1.5",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
        ],
      },
    },
  ],
};
