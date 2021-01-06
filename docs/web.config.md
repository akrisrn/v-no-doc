# web.config

@tags: 部署，代码片段
@updated: 1608370400000, 1609946610000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5d04906

[+#1.2.0](/snippets/version-when-last-update.md)

--8<--

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".md" mimeType="text/markdown; charset=UTF-8"/>
    </staticContent>
  </system.webServer>
</configuration>
```
