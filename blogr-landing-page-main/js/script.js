const menuToggler = document.querySelectorAll('.menu__toggler');
const triggered  = [];
const hamburgerToggler = document.querySelector('#hamburger__toggler');
const hamburgerDropdown = document.querySelector('.hamburger__dropdown');

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

hamburgerToggler.onchange = (event) => {
    
    hamburgerDropdown.classList.toggle('hamburger__dropdown--active');
    if (!event.target.checked) {
        event.target.previousElementSibling.src = "./images/icon-hamburger.svg";
    }else{
        event.target.previousElementSibling.src = "./images/icon-close.svg";
    }
    
     
}