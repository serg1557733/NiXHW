//hamburger menu activation classes
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


 function toggleMenu() {
    if (menu.classList.contains('menu_active')) {
            menu.classList.remove('menu_active');
            hamburger.classList.remove('hamburger_active')
            console.log('if');
            console.log(menu.classList.contains('menu_active'))
    } else {
        menu.classList.add('menu_active');
        hamburger.classList.add('hamburger_active')
        console.log('else');
        console.log(menu.classList.contains('menu_active'))    
    }
}
 
 hamburger.addEventListener('click', toggleMenu);
 console.log(menu.classList.contains('menu_active'))

//show section

const showBtn = document.querySelector('.descript__btn');
const sectionD = document.querySelector('.projects');
const desc = document.querySelector('.descript');
console.log(sectionD);
showBtn.addEventListener('click', () =>{
    sectionD.style.display = "block";
    desc.style.display = "none";

});

//show alert 
const form = document.querySelector('.btn__header');

form.addEventListener('click', ()=> {
    alert('Здесь будет выводиться форма, аналогичная той которая внизу и лэйаут на сайт - если успею дописать)')
})

