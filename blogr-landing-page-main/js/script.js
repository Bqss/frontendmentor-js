const menuToggler = document.querySelectorAll('.menu__toggler');
const triggered  = [];

menuToggler.forEach(e => {
    e.onclick = event => {
        const temp = triggered.pop();
        temp === event.target ? toggleNavigation(event.target) : expanseNavigation(event.target, temp);
        triggered.push(event.target);
    }
});

const toggleNavigation = elem => {
    elem.classList.toggle('menu__toggler--active');
    elem.nextElementSibling.classList.toggle('menu__dropdown--active');
    elem.anima
}
const expanseNavigation = (elem , temporary) => {
    temporary && resetToggled(temporary);
    elem.classList.add('menu__toggler--active');
    elem.nextElementSibling.classList.add('menu__dropdown--active');
}
const resetToggled = elem => {
    elem.classList.remove('menu__toggler--active');
    elem.nextElementSibling.classList.remove('menu__dropdown--active');
}