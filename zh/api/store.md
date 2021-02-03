# store

@tags: API
@updated: 1612334783000, 1612335391000
@creator: AkrISrn
@updater: AkrISrn
@commit: c6035a2

[toc]

## state

[+#1.2.2|zh](/snippets/latest-version.md)

- 类型：

```ts
{
  initing: boolean;
  filePath: string;
  anchor: string;
  queryStr: string;
  homePath: string;
}
```

- `initing`：应用初始化状态。
- `filePath`：当前页面文件的路径。
- `anchor`：当前页面 URL 的 Hash 锚点。
- `queryStr`：当前页面 URL 的查询字符串。
- `homePath`：同 [`vno.path.homePath`](/zh/api/path.md "#h2-8")。