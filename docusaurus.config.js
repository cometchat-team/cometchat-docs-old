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
  title: "My Website Title",
  tagline: "My tagline 🚀",
  url: "https://google.com",
  baseUrl: "/",
  favicon: "/homepage/logo.png",
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
    id: "first-first-category",
    path: "docs/first-first-category",
    routeBasePath: "/first-first-category",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "first-second-category",
    path: "docs/first-second-category",
    routeBasePath: "/first-second-category",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "first-third-category",
    path: "docs/first-third-category",
    routeBasePath: "/first-third-category",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "second-first-category",
    path: "docs/second-first-category",
    routeBasePath: "/second-first-category",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "second-second-category",
    path: "docs/second-second-category",
    routeBasePath: "/second-second-category",
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
  breadcrumbs: true,
  editUrl: "https://google.com",
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

// RESOURCES AND SDKS
const fs = require("fs");
const resourcesHTML = fs.readFileSync("./src/snippets/resources.html", "utf-8");
const sdksHTML = fs.readFileSync("./src/snippets/sdks.html", "utf-8");

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
          src: "/img/logo.svg",
          srcDark: "/img/logo.svg",
          alt: "Logo",
          height: "40px",
          width: "40px",
        },

        items: [
          {
            label: "SDKs",
            type: "dropdown",
            className: "my-website-dropdown",
            items: [
              {
                type: "html",
                value: sdksHTML,
                className: "my-website-dropdown",
              },
            ],
          },
          {
            label: "Guides",
            to: "guides",
            position: "left",
            className: "new-badge",
          },
          {
            label: "Support",
            to: "https://google.com",
          },
          {
            label: "API Reference",
            to: "/api/",
          },
          {
            label: "Resources",
            type: "dropdown",
            className: "my-website-dropdown resources-dropdown",
            items: [
              {
                type: "html",
                value: resourcesHTML,
                className: "my-website-dropdown",
              },
            ],
          },
          {
            label: "Feedback",
            to: "/feedback/",
          },
          {
            type: "search",
            position: "right",
          },

          {
            label: "Book a demo",
            href: "https://google.com",
            position: "right",
            className: "navbar-book-demo",
          },

          {
            label: "Sign Up",
            href: "https://google.com",
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
