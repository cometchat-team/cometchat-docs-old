// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      first: [
        {
          type: "category",
          label: "first",
          link: {
            type: "generated-index",
            title: "first API",
            description:
              "This is a sample server first server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
            slug: "/category/first-api",
          },
          items: require("./docs/first/sidebar.js"),
        },
      ],
      second: [
        {
          type: "category",
          label: "second",
          link: {
            type: "generated-index",
            title: "second API",
            description:
              "This is a sample server second server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
            slug: "/category/second-api",
          },
          items: require("./docs/second/sidebar.js"),
        },
      ],
    },
  ],
};

module.exports = sidebars;
