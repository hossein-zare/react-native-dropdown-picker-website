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
          lastVersion: '5.3'
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
              //   html: '',
              // },
            ],
          },
        ],
        copyright: `
          <div>
            <div>Copyright © ${new Date().getFullYear()} React Native Dropdown Picker.</div>
            <div style="display: flex; align-items: center; justify-content: center; margin-top: 5px;">
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/flag-ukraine_1f1fa-1f1e6.png" width="20" height="20">
              <div style="color: #fbca00; margin-left: 6px;">You are in our <span style="color: #90c8ff;">thoughts!</span></div>
            </div>
          </div>
        `,
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
