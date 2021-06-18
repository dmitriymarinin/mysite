const root = document.documentElement;



// menu 
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
// const body = document.body;

let keys = {
    ESC: 27,
};

menu.inert = true;

let previousActiveElement;

function showMenu() {
    menu.classList.add('menu--showed');
    // body.style.overflow = 'hidden';
    body.classList.add('disable-scroll');
    previousActiveElement = document.activeElement;

    
    Array.from(body.children).forEach((child) => {
        if (child !== menu) {
            child.inert = true;
        }
    });

    menu.inert = false;

    close.focus();
    

    document.addEventListener('keydown', function(e){
        console.log(e)
        if (e.keyCode == keys.ESC) {
            closeMenu();
        }
    });
}

function closeMenu() {
    menu.classList.remove('menu--showed');
    // body.style.overflow = 'initial';
    body.classList.remove('disable-scroll');
    Array.from(body.children).forEach((child) => {
        if (child !== menu) {
            child.inert = false;
        }
    });

    menu.inert = true;

    previousActiveElement.focus();
}

burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);

