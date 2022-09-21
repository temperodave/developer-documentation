// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Datafi for Developers",
  tagline: "Simple and secure access to data where it lives",
  url: "https://developer.datafi.us",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "datafilabs", // Usually your GitHub org/user name.
  projectName: "developer-documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
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
        title: "For Developers",
        logo: {
          alt: "Datafi Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://home.datafi.us/register",
            label: "Sign up",
            position: "right",
          },
          {
            href: "https://home.datafi.us",
            label: "Log In",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            // title: "",
            items: [
              {
                label: "Home",
                to: "https://datafi.us",
              },
              // {
              //   label: "Blog",
              //   to: "https://blog.datafi.us",
              // },
              {
                label: "Docs",
                to: "https://docs.datafi.us",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://blog.datafi.us",
              },
              {
                label: "GitHub",
                href: "https://github.com/datafilabs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Datafi Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
