// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const guides_sidebars = {
  guides: [{
    type: "doc",
    label: "Introduction",
    id: "intro",
  }, {
    type: "category",
    label: "Chat",
    items: [
      {
        type: "doc",
        label: "SDKs",
        id: "chat/sdks",
      },
    ],
  }],
};

module.exports = guides_sidebars;
