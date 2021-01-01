(() => {
  vno.callAndListen(() => vno.waitFor(() => {
    twemoji.parse(document.body);
  }), vno.enums.EEvent.htmlChanged);
})();
