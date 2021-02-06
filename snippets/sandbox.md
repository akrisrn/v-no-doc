# Sandbox

@tags: snippet/component
@updated: 1612610931000, 1612625751000
@creator: AkrISrn
@updater: AkrISrn
@commit: 8fefc2b

<div id="sandbox">
  <div id="preview" v-html="html"></div>
  <div id="separator"></div>
  <textarea class="ipt" $$: isSnippet && '<< 1| >>' ? `data="<< 1| >>" ` : '' $$v-model="text" ref="textarea"></textarea>
</div>

[$](/uploads/scripts/sandbox.js)
[*](/uploads/styles/sandbox.css)
