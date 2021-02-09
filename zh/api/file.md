# file

@tags: API
@updated: 1609910685000, 1612610932000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5812292

[toc]

## createErrorFile(path)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
- 返回值：`IFile`

创建一个错误文件对象。

## isCached()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：`boolean`

是否使用文件对象缓存。

## disableCache()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：无

临时禁用文件对象缓存。它只会保证后续对各个文件的第一次请求不会使用缓存。

## enableCache()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：无

启用文件对象缓存。

## getFile(path)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
- 返回值：`Promise<IFile>`

获取文件对象。

## getFiles()

[+#1.2.2](/snippets/latest-version.md)

- 参数：无
- 返回值：

```ts
Promise<{
  files: Dict<IFile>;
  backlinks: Dict<string[]>;
}>
```

获取所有的文件对象和反向链接。

## sortFiles(fileA, fileB)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `fileA: ISimpleFile`：文件对象 A。
    - `fileB: ISimpleFile`：文件对象 B。
- 返回值：`number`

用于 `Array.sort()` 的文件对象比较函数。
