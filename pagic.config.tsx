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
  //   tocAd: (
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: `
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  // <!-- 192*128 -->
  // <ins
  //   class="adsbygoogle"
  //   style="display:inline-block;width:192px;height:128px"
  //   data-ad-client="ca-pub-8483371329009107"
  //   data-ad-slot="6487368873"
  // ></ins>
  // <script>
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // </script>`
  //       }}
  //     />
  //   ),
  //gitalk: {
  //  clientID: '29aa4941759fc887ed4f',
  //  clientSecret: '33e355efdf3a1959624506a5d88311145208471b',
  //  repo: 'typescript-tutorial',
  //  owner: 'xcatliu',
  //  admin: ['xcatliu'],
  //  pagerDirection: 'first',
  //},
  //ga: {
  //  id: 'UA-45256157-14',
  //},
  port: 8001,
};
