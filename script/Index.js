document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelector('.nav');
    let nav1 = document.querySelector('#h1');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
 //         document.querySelector('nav').style.backgroundColor = "white";
            nav.classList.add("nav-scrolled");
            nav1.classList.add(".header__ascrolled");
            nav1.classList.remove("header__a");
        } else {
 //         document.querySelector('nav').style.padding = "30px";
        }
    }

});