# Console

@tags: snippet/component
@updated: 1612424983000
@creator: AkrISrn
@updater: AkrISrn
@commit: 586e111

<div id="console">
  <input v-model.trim="evalStr" @keyup.enter="submit" class="ipt">
  <div v-for="(result, i) of results" :key="i" class="result">
    <div v-html="result.code"></div>
    <span :class="['value', { error: result.isError }]">
      <span v-if="result.isAsync" v-html="result.value"></span>
      <template v-else>{{ result.value }}</template>
    </span>
  </div>
</div>

[$](/uploads/scripts/console.js)
[*](/uploads/styles/console.css)
