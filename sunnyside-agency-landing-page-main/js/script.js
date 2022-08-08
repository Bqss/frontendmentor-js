const toggler = document.querySelector('#toggler');
const menu = document.querySelector('.hamburger__links');

toggler.onchange = () => {
    menu.classList.toggle('active');

}