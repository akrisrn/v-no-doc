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
    ['-->', '→'],
    ['<--', '←'],
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
  defaultConf: 'zh',
  multiConf: {
    en: {
      alias: 'English',
    },
    zh: {
      alias: '简体中文',
      messages: {
        home: '主页',
        raw: '源文件',
        footnotes: '脚注：',
        returnHome: '返回主页',
        lastUpdated: '最后更新',
        untagged: '未分类',
        searching: '搜索中……',
        searchNothing: '什么也没找到。',
        showBacklinks: '查看反向链接',
        noBacklinks: '没有页面链接到这里。',
        loading: '加载中……',
        redirectFrom: '重定向自：',
      },
    },
  },
};
