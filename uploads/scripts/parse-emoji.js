(() => {
  const parseEmoji = () => vno.waitFor(() => twemoji.parse(document.body));
  parseEmoji();
  document.addEventListener(vno.enums.EEvent.htmlChanged, parseEmoji);
})();
