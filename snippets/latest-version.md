# Latest version

@tags: snippet/template
@updated: 1609498959000, 1612886035000
@creator: AkrISrn
@updater: AkrISrn
@commit: d83fb77

:::$$: '{{ 0| }}' === vno.version ? ' .success.empty .' : '' $$
**v{{ 0|0.1.0 }}$$: '{{ 0| }}' === vno.version ? vno.getMessage('latest') : ' +' $$**
:::
