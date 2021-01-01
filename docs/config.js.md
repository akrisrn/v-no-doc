# config.js

@tags: 部署/配置，代码片段
@updated: 1608363717000, 1609500914000
@creator: AkrISrn
@updater: AkrISrn
@commit: aa2185b

[+#1.2.0](/snippets/version-when-last-update.md)

--8<--

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
    redirectFrom: 'Redirect from:',
  },
  defaultConf: '',
  multiConf: {},
};
```
