# web.config

@tags: 部署，代码片段
@updated: 1608370400000
@creator: AkrISrn
@updater: AkrISrn
@commit: b0fc02e

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
