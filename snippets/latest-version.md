# Latest version

@tags: snippet/template
@updated: 1612335391000, 1612698773000
@creator: AkrISrn
@updater: AkrISrn
@commit: c815ad8

:::$$: '{{ 0| }}' === vno.version ? ' .success.empty .' : '' $$
**v{{ 0|0.1.0 }}$$: '{{ 0| }}' === vno.version ? vno.getMessage('latest') : ' +' $$**
:::
