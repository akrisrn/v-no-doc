# store

@tags: API
@updated: 1609910685000, 1613906715000
@creator: AkrISrn
@updater: AkrISrn
@commit: 26f1ac7

[toc]

## state

[+#1.2.2](/snippets/latest-version.md)

- 类型：

```ts
{
  initing: boolean
  filePath: string
  anchor: string
  queryStr: string
  homePath: string
}
```

- `initing`：应用初始化状态。
- `filePath`：当前页面文件的路径。
- `anchor`：当前页面 URL 的 Hash 锚点。
- `queryStr`：当前页面 URL 的查询字符串。
- `homePath`：同 [`vno.path.homePath`](/zh/api/path.md "#h2-8")。
