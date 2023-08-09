// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const guides_sidebars = {
  guides: [
    {
      type: "doc",
      label: "Introduction",
      id: "intro",
    },
    {
      type: "category",
      label: "Chat",
      collapsible: true,
      items: [
        { type: "doc", label: "Introduction", id: "chat/intro" },
        {
          type: "doc",
          label: "SDKs",
          id: "chat/sdks",
        },
      ],
    },
    {
      type: "category",
      label: "Call",
      collapsible: true,
      items: [
        { type: "doc", label: "Introduction", id: "call/intro" },
        {
          type: "doc",
          label: "SDKs",
          id: "call/sdks",
        },
      ],
    },
  ],
};

module.exports = guides_sidebars;
