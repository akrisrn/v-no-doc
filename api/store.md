# store

@tags: API
@updated: 1609910685000, 1612093023000
@creator: AkrISrn
@updater: AkrISrn
@commit: fed4591

[toc]

## state

[+#1.2.2](/snippets/version-when-last-update.md)

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
- `homePath`：同 [`vno.path.homePath`](/api/path.md "#h2-8")。
