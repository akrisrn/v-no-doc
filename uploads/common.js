(() => {
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
})();
