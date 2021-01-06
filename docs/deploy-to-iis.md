# 部署到 Internet Information Services (IIS)

@tags: 部署
@updated: 1608394091000, 1609946610000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5d04906

[+#1.2.0](/snippets/version-when-last-update.md)

1. 右键添加网站。
1. 填写网站名称。
1. 填写物理路径。如果你的 `VUE_APP_PUBLIC_PATH` [](/docs/env-vars.md "#") 是 `/`，它就是网站根目录的路径；如果不是，你需要指定它的上级目录的路径。
1. 检查端口。

IIS 有些特殊，你可能还需要配置一下 `.md` 文件的 MIME 类型：

1. 在你填写物理路径下新建一个 `web.config` 文件。
1. 将下面的代码拷贝进去：

[+#clip=1](/docs/web.config.md)

你还有可能遇到 IIS 无权读取文件的问题，记得要右键为网站目录添加 Everyone 读取权限。
