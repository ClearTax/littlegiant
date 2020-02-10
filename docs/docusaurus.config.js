const package = require("../package.json");

const title = 'LittleGiant';

module.exports = {
  title,
  tagline: package.description,
  url: 'https://cleartax.github.io',
  baseUrl: "/littlegiant/",
  favicon: "img/favicon.ico",
  organizationName: "cleartax",
  projectName: "littlegiant",
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      title,
      logo: {
        alt: `${package.name} logo`,
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/getting-started",
          label: "Getting Started",
          position: "left"
        },
        {
          href: package.repository.url,
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ClearTax, Inc. Built by Escher.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${package.repository.url}/edit/master/docs/`
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
