// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // TODO
  title: "Template",
  url: "https://jc-verse.github.io",
  // TODO
  baseUrl: "/docusaurus-template/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // TODO make a project logo and use it as favicon
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // TODO: doc configurations? Do you need a React landing page?
          routeBasePath: "/",
          // The sidebars file is not included. You can add it yourself, but the
          // default is usually good enough.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // TODO
        title: "Template",
        logo: {
          alt: "Logo",
          src: "img/logo-light.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          // TODO
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Intro",
          },
          {
            href: "https://github.com/jc-verse/docusaurus-template",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "JC-verse logo",
          src: "img/logo.svg",
          href: "https://github.com/jc-verse",
        },
        copyright: `Copyright © ${new Date().getFullYear()} JC-verse. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
