(() => {
  const id = 'file-count';
  vno.addEventListener(document, vno.enums.EEvent.rendered, () => {
    vno.file.getFiles().then(({ files }) => {
      vno.articleSelf.asyncResults.push([id, `${Object.keys(files).length}`]);
    });
  });
})();
