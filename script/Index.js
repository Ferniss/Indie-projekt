document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelector('.nav');
    let navwest = document.querySelector('#h1');
    let navhome = document.querySelector('.ul-nav');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
 //         document.querySelector('nav').style.backgroundColor = "white";
            nav.classList.add("nav-scrolled");
            navwest.style.color = "black";
            navwest.style.margintop = "0px";
            navwest.classList.remove("header__a");
            navhome.style.color = "black";
            navhome.style.margintop = "0px";
            navhome.classList.remove(".nav__ul--color");
        } else {
 //         document.querySelector('nav').style.padding = "30px";
            nav.classList.remove("nav-scrolled");
            navwest.style.color = "white";
            navwest.style.margintop = "";
            navwest.classList.add("header__a");
            navhome.style.color = "white";
            navhome.style.margintop = "";
            navhome.classList.add(".nav__ul--color");
        }
    }

});