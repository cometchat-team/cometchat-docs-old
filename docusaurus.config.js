// @ts-check
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
  title: "My Website Title",
  tagline: "My tagline 🚀",
  url: "https://ahmedbargady.me",
  baseUrl: "/",
  favicon: "/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  onBrokenLinks: "ignore",
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: "cli",
    path: "docs/cli",
    routeBasePath: "/cli",
  },
  {
    id: "plugin-sdk",
    path: "docs/plugin-sdk",
    routeBasePath: "/plugin-sdk",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "ui-kit",
    path: "docs/ui-kit",
    routeBasePath: "/ui-kit",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
];

// TODO: update this infos
/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  editUrl: "https://ahmedbargady.me",
  showLastUpdateTime: true,
  remarkPlugins: [
    [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
  ],
  sidebarPath: require.resolve("./sidebars-default.js"),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve("./sidebars-default.js"),
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
          customCss: [require.resolve("./src/css/custom.css")],
        },
        sitemap: {
          ignorePatterns: ["/tags/**"],
        },
        // TODO: add your own google analytics id
        // googleTagManager: {
        //   containerId: '',
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          href: "/",
          src: "/img/logo.svg",
          srcDark: "/img/logo.svg",
          alt: "Logo",
          height: "40px",
          width: "40px",
        },

        items: [
          // TODO: add the dropdown
          // {
          //   label: 'SDKs',
          //   type: 'dropdown',
          //   className: 'dyte-dropdown',
          //   items: [
          //     {
          //       type: 'html',
          //       value: sdksHTML,
          //       className: 'dyte-dropdown',
          //     },
          //   ],
          // },
          {
            label: "Guides",
            to: "guides",
            position: "left",
            className: "new-badge",
          },
          // TODO: change this links
          {
            label: "Support",
            to: "https://dyte.io/contact",
          },
          {
            type: "search",
            position: "right",
          },
          // TODO: change this links

          {
            label: "Book a demo",
            href: "https://dyte.io/schedule-demo",
            position: "right",
            className: "navbar-book-demo",
          },
          // TODO: change this links

          {
            label: "Sign Up",
            href: "https://dev.dyte.io/register",
            position: "right",
            className: "dev-portal-signup dev-portal-link",
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
      // TODO: add your own credintials for algolia
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: 'docs',
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
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
