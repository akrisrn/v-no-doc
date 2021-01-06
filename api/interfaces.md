# Interfaces

@tags: API

[toc]

## IConfig

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
interface IConfig {
  siteName?: string;
  dateFormat?: string;
  smartQuotes?: string | string[];
  replacer?: [string, string][];
  cdn?: string;
  cacheKey?: string | Dict<string>;
  paths: {
    favicon?: string;
    index: string;
    readme: string;
    archive: string;
    category: string;
    search: string;
    common?: string;
  };
  messages: {
    home: string;
    raw: string;
    footnotes: string;
    returnHome: string;
    lastUpdated: string;
    untagged: string;
    pageError: string;
    searching: string;
    searchNothing: string;
    showBacklinks: string;
    noBacklinks: string;
    loading: string;
    redirectFrom: string;
  };
  defaultConf?: string;
  multiConf?: Dict<IConfig>;
  alias?: string;

  [index: string]: any;
}
```

## IFlags

[+#1.2.1](/snippets/version-when-last-update.md)

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

  [index: string]: string | string[] | number[] | undefined;
}
```

## ISimpleFile

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
interface ISimpleFile {
  path: string;
  flags: IFlags;
  isError?: boolean;
}
```

## IFile

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
interface IFile extends ISimpleFile {
  data: string;
  links: Dict<TLink>;
}
```
