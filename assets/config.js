try {
  cacheKey;
} catch {
  cacheKey = '';
}

try {
  deployTime;
} catch {
  deployTime = '';
}

vnoConfig = {
  siteName: 'v-no',
  dateFormat: '',
  smartQuotes: '',
  replacer: [
    ['“', '『'],
    ['”', '』'],
    ['‘', '「'],
    ['’', '」'],
  ],
  cdn: !['127.0.0.1', 'localhost'].includes(location.hostname)
      ? 'https://cdn.jsdelivr.net/gh/akrisrn/v-no-doc@master/' : '',
  cacheKey,
  paths: {
    favicon: '/uploads/images/favicon.png',
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
    pageError: '## [+](/error.md)',
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
