// @ts-nocheck
// @ts-ignore
// Note: type annotations allow type checking and IDEs autocompletion

const code_themes = {
  light: require("prism-react-renderer/themes/github"),
  dark: require("prism-react-renderer/themes/vsDark"),
};

const { webpackPlugin } = require("./plugins/webpack-plugin.cjs");
const tailwindPlugin = require("./plugins/tailwind-plugin.cjs");

// TODO: update this infos
/** @type {import('@docusaurus/types').Config} */
const metadata = {
  title: "Cometchat Docs",
  tagline: "",
  url: "https://docs.cometchat.com",
  baseUrl: "/",
  favicon: "/homepage/logo.png",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  onBrokenLinks: "ignore",
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = require("./docs_with_sidebar_list.json");

// TODO: update this infos
/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  // editUrl: "https://google.com",
  showLastUpdateTime: true,
  remarkPlugins: [
    [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
  ],
  sidebarPath: require.resolve("./sidebar_auto.js"),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve("./sidebar_auto.js"),
  ...options
}) {
  return [
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...metadata,
  plugins,

  trailingSlash: false,
  themes: ["@docusaurus/theme-live-codeblock"],
  clientModules: [require.resolve("./src/client/define-ui-kit.js")],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/guides",
          id: "guides",
          routeBasePath: "/guides",
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/api-reference.css"),
          ],
        },
        sitemap: {
          ignorePatterns: ["/tags/**"],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: "/",
          src: "/imgs/logo.svg",
          srcDark: "/imgs/logo.svg",
          alt: "Logo",
          width: "150px",
        },

        items: [
          {
            label: "Overview",
            type: "dropdown",
            items: [
              {
                type: "html",
                value: "<div></div>",
                className: "my-website-dropdown",
              },
            ],
          },
          {
            label: "Implementation",
            type: "dropdown",
            items: [
              {
                type: "html",
                value: "<div></div>",
                className: "my-website-dropdown",
              },
            ],
          },
          {
            type: "search",
            position: "right",
          },
          {
            label: "Log in",
            href: "https://google.com",
            position: "right",
            className: "navbar-book-demo",
          },
          {
            label: "Schedule a demo",
            href: "https://google.com",
            position: "right",
            className: "schedule_a_demo_button",
          },
        ],
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          "dart",
          "ruby",
          "groovy",
          "kotlin",
          "java",
          "swift",
          "objectivec",
        ],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "highlight-next-line-error",
          },
        ],
      },
      algolia: {
        appId: "fff",
        apiKey: "ffff",
        indexName: "docs",
        contextualSearch: true,
        searchParameters: {},
      },
    }),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
};

module.exports = config;
