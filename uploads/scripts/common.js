(() => {
  const top = document.querySelector('#top > div');
  const apiLink = document.createElement('a');
  apiLink.href = `#/${vno.appSelf.selectConf}/api/`;
  const select = top.querySelector('select');
  if (select) {
    top.insertBefore(apiLink, select);
  } else {
    top.append(apiLink);
  }
  const consoleLink = document.createElement('a');
  consoleLink.href = `#/${vno.appSelf.selectConf}/console.md`;
  top.insertBefore(consoleLink, apiLink);
  vno.updateDom().then();
  vno.callAndListen(() => {
    if (vno.filePath.split('/')[2] === 'api' && !vno.mainSelf.isError) {
      document.querySelectorAll('header,h2,h3,h4,h5,h6,#toc').forEach(element => {
        element.classList.add('api');
      });
    }
  }, vno.enums.EEvent.htmlChanged);
  vno.callAndListen(() => {
    const itemCommit = document.querySelector('.item-commit');
    if (itemCommit) {
      const hash = itemCommit.innerText;
      const a = document.createElement('a');
      a.href = `https://raw.githubusercontent.com/akrisrn/v-no-doc/${hash}${vno.filePath}`;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.text = hash;
      itemCommit.innerHTML = '';
      itemCommit.append(a);
    }
  }, vno.enums.EEvent.mainShown);
})();
