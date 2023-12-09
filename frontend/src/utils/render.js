const clearPage = (isHomePage) => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  if(isHomePage) main.innerHTML = '<div id="menu"></div>'
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

export { clearPage, renderPageTitle };
