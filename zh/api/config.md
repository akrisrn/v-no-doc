# config

@tags: API
@updated: 1612334783000, 1612335391000
@creator: AkrISrn
@updater: AkrISrn
@commit: c6035a2

[toc]

## getSelectConf()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：`string`

获取当前使用的配置名。

## config

[+#1.2.0](/snippets/latest-version.md)

- 类型：`IConfig`

配置对象。

## confList

[+#1.2.2](/snippets/latest-version.md)

- 类型：`TConfList | null`

多配置的配置名列表，包含别名。

## enableMultiConf

[+#1.2.0](/snippets/latest-version.md)

- 类型：`boolean`

是否启用多配置。

## baseFiles

[+#1.2.0](/snippets/latest-version.md)

- 类型：`string[]`

基础文件列表。

## shortBaseFiles

[+#1.2.0](/snippets/latest-version.md)

- 类型：

```ts
{
  index: string;
  readme: string;
  archive: string;
  category: string;
  search: string;
}
```

基础文件的短路径列表（省略 `index.md`）。

## homeHash

[+#1.2.0](/snippets/latest-version.md)

- 类型：`string`

主页的 Hash 地址。
