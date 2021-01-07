# 最后更新时的 v-no 版本

@tags: 片段/模板
@updated: 1609498959000, 1610010298000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5bb21c7

:::$$ return '{{ 1 }}' === vno.version ? ' .success.empty .' : '' $$
**v{{ 1|0.1.0 }}$$ return '{{ 1 }}' === vno.version ? '（最新）' : ' +' $$**
:::
