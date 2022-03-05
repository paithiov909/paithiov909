const path = require('path')

module.exports = {

  base: '/',
  lang: 'en-US',
  pagePatterns: ['**/*.md', '**/*.vue',
                 '!**/**/LICENSE.md', '!**/rust4cpp/rc-raw.md', '!**/rinternals/pairlists.md'],
  
  title: 'Oreno R-refs',
  description: 'My personal reference site that generated with VuePress',

  head: [
    ['meta', { name: 'robots', content: 'noindex,nofollow,noodp' }],
    ['meta', { property: 'og:url', content: 'https://r-refs-paithiov909.netlify.app/' }],
    ['meta', { property: 'og:image' , content: 'https://via.placeholder.com/1200x630.png?text=OrenoR-refs' }],
    ['meta', { property: 'og:type' , content: 'website' }],
    ['meta', { property: 'og:title' , content: 'Oreno R-refs' }],
    ['meta', { property: 'og:description' , content: 'My personal reference site that generated with VuePress' }],
    ['meta', { property: 'og:site_name' , content: 'Oreno R-refs' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://rawcdn.githack.com/paithiov909/documents/c6714d9bbf9e5bc1c436f67e7d888c69ba8b8f70/favicon/info/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://rawcdn.githack.com/paithiov909/documents/c6714d9bbf9e5bc1c436f67e7d888c69ba8b8f70/favicon/info/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://rawcdn.githack.com/paithiov909/documents/c6714d9bbf9e5bc1c436f67e7d888c69ba8b8f70/favicon/info/favicon-16x16.png' }],
  ],

  themeConfig: {
    repo: 'paithiov909/r-refs',
    editLink: false,
    lastUpdated: false,
    sidebar: [
      {
        text: 'Home',
        link: '/README.md'
      },
      {
        text: 'References',
        link: '/references.md'
      },
      {
        text: 'R internals',
        link: '/rinternals/',
        children: [
          '/rinternals/environments.md',
          '/rinternals/error-eval.md',
          '/rinternals/external-pointers.md',
          '/rinternals/functions.md',
          '/rinternals/gc-rc.md',
          '/rinternals/misc.md',
          '/rinternals/oo.md',
          { text: 'Other header files', link: '/rinternals/other-headers.md' },
          '/rinternals/save-load.md',
          '/rinternals/strings.md',
          '/rinternals/symbols.md',
          '/rinternals/vectors.md'
       ]
      },
      {
        text: 'Rust for C++ programmers',
        link: '/rust4cpp/',
        children: [
          '/rust4cpp/arrays.md',
          '/rust4cpp/borrowed.md',
          '/rust4cpp/closures.md',
          '/rust4cpp/control-flow.md',
          '/rust4cpp/data-types.md',
          '/rust4cpp/destructuring.md',
          '/rust4cpp/destructuring-2.md',
          '/rust4cpp/hello-world.md',
          '/rust4cpp/primitives.md',
          '/rust4cpp/unique.md'
        ]
      },
      {
        text: 'ML YouTube Courses',
        link: '/mlcourses/'
      },
      {
        text: 'NLP datasets',
        link: '/nlpdatasets/'
      }
    ]
  },

  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/plugin-search', { hotKeys: [] }],
  ]
}
