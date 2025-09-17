// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';




// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio',
  tagline: '',

  favicon: 'img/deweyd.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://catsyzz.github.io', // Your website URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/portfolio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'catsyzz', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  deploymentBranch: 'gh-pages',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/projects', // Serve the blog at the site's root
          showReadingTime: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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
      // Replace with your project's social card
      image: 'img/deweydd.png',
      navbar: {
        title: ' ',
        logo: {
          alt: 'Dom',
          src: '/img/deweydd.png',
        },
        items: [

           {to: '/projects', label: 'Projects', position: 'left'},

           {to: '/about-me', label: 'About Me', position: 'right'},
        ],
      },

      footer: {
        style: 'dark',
        links: [

          {
            title: 'Professional',
            items: [
              {
                label: 'Resume',
                href: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:9f82895e-98bd-4c63-9978-9e8b0b9569f1',
              },
              {
                label: 'CV',
                href: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:9f82895e-98bd-4c63-9978-9e8b0b9569f1',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/docusaurus',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/catsyzz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Me',
                to: '/about-me',
              },
            ],
          },
        ],
      
        copyright: `Copyright © Dominic Lopez ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
