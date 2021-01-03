import { React } from 'https://deno.land/x/pagic@v1.1.1/mod.ts';
export default {
  srcDir: 'docs',
  outDir: 'public',
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
      text: '本网站使用 Pagic 构建',
      link: 'https://github.com/xcatliu/pagic',
      target: '_blank',
    },
  ],
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },
  port: 8001,
};