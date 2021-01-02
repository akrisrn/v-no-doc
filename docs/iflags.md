# IFlags

@tags: 代码片段

[+#1.2.1](/snippets/version-when-last-update.md)

--8<--

```ts
interface IFlags {
  title: string;
  tags?: string[];
  updated?: string[];
  cover?: string;
  times?: number[];
  startDate?: string;
  endDate?: string;
  creator?: string;
  updater?: string;

  [index: string]: string | string[] | number[];
}
```
