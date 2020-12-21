# 部署在 Node.js

@tags: 部署
@updated: 1608394091000
@creator: AkrISrn
@updater: AkrISrn
@commit: 4c6801d

v-no-script 有个帮助你启动 [Express.js](https://expressjs.com/) 服务的[简单脚本](https://github.com/akrisrn/v-no-script/blob/master/src/web-server.ts)，建议用它在本地部署 v-no。我以后会为它增加无需刷新浏览器的同步渲染（热部署）等功能。

它需要你在 `.env` 文件中正确填写下面的配置项才能正常工作：

```shell
SITE_PATH=
PORT=3000
PUBLIC_PATH=/
INDEX_PATH=-/index.html
```

| | |
| - | - |
| `SITE_PATH` | 网站根目录的路径。不能为空。 |
| `PORT` | 端口。可以为空，默认为 `3000`。 |
| `PUBLIC_PATH` | 和 `VUE_APP_PUBLIC_PATH` [](/docs/env-vars.md "#")一致。可以为空，默认为 `/`。 |
| `INDEX_PATH` | 和 `VUE_APP_INDEX_PATH` [](/docs/env-vars.md "#")一致。可以为空，默认为 `-/index.html`。 |
