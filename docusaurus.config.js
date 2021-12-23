// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Dropdown Picker',
  tagline: 'Customizable drop-down picker for react native',
  url: 'https://hossein-zare.github.io',
  trailingSlash: false,
  baseUrl: '/react-native-dropdown-picker-website/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hossein-zare', // Usually your GitHub org/user name.
  projectName: 'react-native-dropdown-picker-website', // Usually your repo name.
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://hossein-zare.github.io/react-native-dropdown-picker-website',
          lastVersion: '5.2'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'React Native Dropdown Picker',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'installation',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/hossein-zare/react-native-dropdown-picker',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/react-native-dropdown-picker',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hossein-zare/react-native-dropdown-picker',
              },
              // {
              //   html: '<a style="color: #ffc107;" href="https://www.buymeacoffee.com/hossein_zare">Donate (Buy me a coffee)</a>',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Native Dropdown Picker.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      require.resolve("@cmfcmf/docusaurus-search-local"),

    ],
};

module.exports = config;
