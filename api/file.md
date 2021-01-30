# file

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## createErrorFile(path)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`IFile`

创建一个错误文件对象。

## isCached()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`boolean`

是否缓存文件对象。

## disableCache()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

禁用缓存。

## enableCache()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

启用缓存。

## getFile(path)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`Promise<IFile>`

获取文件对象。

## getFiles()

[+#1.2.2](/snippets/version-when-last-update.md)

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

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `fileA: ISimpleFile`
    - `fileB: ISimpleFile`
- 返回值：`number`

用于 `Array.sort()` 的文件比较函数。
