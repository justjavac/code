import { React } from 'https://deno.land/x/pagic@v1.1.1/mod.ts';

export default {
  srcDir: 'docs',
  include: ['README.md', 'docs'],
  exclude: ['examples'],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next', 'gitalk', 'ga'],
  title: '网址收藏',
  description: '个人收藏备份。',
  github: 'https://github.com/asa1253/asa1253.github.io',
  head: <link rel="icon" type="image/png" href="/favicon.png" />,
  nav: [
    {
      text: 'linux',
      link: '/docs/index.html',
      target: '_blank',
    },
  ],
  sidebar: {
    '/': [
      {
        link: 'linux/README.md',
        children: [
          'linux/linux.md',
        ],
        link: 'video/README.md',
        children: [
          'linux/linux.md',
        ],
      },
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },
};
