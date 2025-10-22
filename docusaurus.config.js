// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dom's Portfolio",
  tagline: '',
  favicon: 'img/deweyd.ico',

  future: {
    v4: true,
  },

  url: 'https://catsyzz.me',
  baseUrl: '/', // Change to '/' if deploying to root of custom domain

  organizationName: 'catsyzz',
  projectName: 'portfolio',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
    

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/design-processes',
          showReadingTime: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/deweydd.png',
      navbar: {
        title: ' ',
        logo: {
          alt: 'Dom',
          src: '/img/deweydd.png',
        },
        items: [
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/about-me', label: 'About Me', position: 'left'},
        ],
      },
      footer: {
        copyright: `© Dominic Lopez ${new Date().getFullYear()}`,
      },
      prism: {
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;