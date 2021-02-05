(() => {
  vno.callAndListen(() => vno.waitFor(() => {
    twemoji.parse(document.body);
  }), vno.EEvent.htmlChanged);
})();
