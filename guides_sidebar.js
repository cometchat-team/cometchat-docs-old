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
    link: {
        type: "generated-index"
      },
    collapsible: true,
    items: [
      {
        type: "doc",
        label: "SDKs",
        id: "chat/sdks",
      },
      { type: "doc", label: "Tools", id: "chat/tools" },
      { type: "doc", label: "Introduction", id: "chat/intro"}
    ],
  }],
};

module.exports = guides_sidebars;
