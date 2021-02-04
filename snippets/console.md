# Console

@tags: snippet/component

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
