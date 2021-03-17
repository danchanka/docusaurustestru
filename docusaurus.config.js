module.exports = {
  title: 'Документация по lsfusion',
  tagline: 'lsfusion',
  url: 'https://danchanka.github.io',
  baseUrl: '/docusaurustestru/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'danchanka', // Usually your GitHub org/user name.
  projectName: 'docusaurustestru', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'lsfusion',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/Learn',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/danchanka/docusaurustestru',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'lsf документация',
              to: 'docs/Learn',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://ru.stackoverflow.com/questions/tagged/lsfusion',
            },
            {
              label: 'Slack',
              href: 'https://slack.lsfusion.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lsfusion',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Блог',
              to: 'blog',
            },
            {
              label: 'Хабр',
              href: 'https://habr.com/ru/company/lsfusion/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lsfusion/platform',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/danchanka/docusaurustestru/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/danchanka/docusaurustestru/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
