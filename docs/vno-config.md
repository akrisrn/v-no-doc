# config.js 文件

@tags: 部署/配置
@updated: 2020/12/12

```js
vnoConfig = {
  siteName: '',
  dateFormat: '',
  cdn: '',
  cacheKey: '',
  paths: {
    favicon: '/uploads/favicon.png',
    index: '/index.md',
    readme: '/README.md',
    archive: '/archives.md',
    category: '/categories.md',
    search: '/search.md',
    common: '/common.md',
  },
  messages: {
    home: 'HOME',
    raw: 'Raw',
    footnotes: 'Footnotes:',
    returnHome: 'Return to home',
    lastUpdated: 'Last updated',
    untagged: 'untagged',
    pageError: 'There is something wrong with this page.',
    searching: 'Searching...',
    searchNothing: 'Nothing.',
    showBacklinks: 'Show backlinks',
    noBacklinks: 'No backlinks.',
    loading: 'Loading...',
  },
  defaultConf: '',
  multiConf: {},
};
```