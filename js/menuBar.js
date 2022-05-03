const menu = document.querySelector('.menu__bars');
const list = document.querySelector('.list');
const cross = document.querySelector('.crossBar');

menu.addEventListener('click', () => {
    list.classList.add('toggle');
    menu.style.display = 'none';
    cross.style.visibility = 'visible';
});

cross.addEventListener('click', () => {
    list.classList.remove('toggle');
    menu.style.display = 'initial';
    cross.style.visibility = 'hidden';
})

