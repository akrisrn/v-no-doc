# 多配置示例

@tags: 部署/配置，snippet/code
@updated: 1607966207000, 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

```js
vnoConfig = {
  // 这里为了避免重复，把主配置略去了。
  // 因为下面任意一组配置项都构不成可用的主配置，这里实际是不能省的。
  defaultConf: 'en',
  multiConf: {
    en: {
      alias: 'English',
    },
    zh: {
      alias: '中文 (简体)',
      dateFormat: 'YYYY 年 MM 月 DD 日',
      messages: {
        home: '主页',
      },
    },
    jp: {
      alias: '日本語',
      messages: {
        home: 'ホームページ',
      },
    },
  },
};
```
