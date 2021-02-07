(() => {
  const top = document.querySelector('#top > div');
  const apiLink = document.createElement('a');
  apiLink.href = `#/${vno.selectConf}/api/`;
  const select = top.querySelector('select');
  if (select) {
    top.insertBefore(apiLink, select);
  } else {
    top.append(apiLink);
  }
  const consoleLink = document.createElement('a');
  consoleLink.href = `#/console.md`;
  top.insertBefore(consoleLink, apiLink);
  const sandboxLink = document.createElement('a');
  sandboxLink.href = `#/sandbox.md`;
  top.insertBefore(sandboxLink, apiLink);
  vno.updateDom().then();

  vno.callAndListen(() => {
    const itemCommit = document.querySelector('.item-commit');
    if (!itemCommit) {
      return;
    }
    const hash = itemCommit.innerText;
    const a = document.createElement('a');
    a.href = `https://raw.githubusercontent.com/akrisrn/v-no-doc/${hash}${vno.filePath}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.text = hash;
    itemCommit.innerHTML = '';
    itemCommit.append(a);
  }, vno.EEvent.mainShown);

  vno.callAndListen(() => {
    if (vno.filePath.split('/')[2] !== 'api' || vno.mainSelf.isError) {
      return;
    }
    document.querySelectorAll('header,h2,h3,h4,h5,h6,#toc').forEach(element => {
      element.classList.add('api');
    });
  }, vno.EEvent.htmlChanged);
})();
