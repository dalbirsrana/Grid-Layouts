let menu = document.querySelector('nav.style-switcher');

console.log(menu);

menu.addEventListener('click', (e) => {
    console.log(e.target.textContent);

    const btn = e.target.textContent;

    document.body.classList = '';
    document.body.classList.add(`example${btn}-active`);

});