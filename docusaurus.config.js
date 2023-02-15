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
            "https://github.com/datafilabs/developer-documentation/tree/main/",
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
                label: "Website",
                to: "https://datafi.us",
              },
              {
                label: "Datafi Cloud",
                to: "https://home.datafi.us",
              },
              {
                label: "Documentation",
                to: "https://docs.datafi.us",
              },
            ],
          },
          {
            // title: "Community",
            items: [
              {
                label: "Linkedin",
                to: "https://linkedin.com/company/datafi-us",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/DatafiLabs",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCxgBtPLWrU0y2hwHJ5bcUGQ?view_as=subscriber",
              },
             
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Twitter",
          //       to: "",
          //     },
          //     {
          //       label: "Linkedin",
          //       href: "",
          //     },
          //     {
          //       label: "YouTube",
          //       href: "",
          //     },
          //   ],
          // },
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
