document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelector('.nav');
    let navwest = document.querySelector('#h1');
    let navhome = document.querySelector('.ul-nav');
    let navblog = document.querySelector('#ul-nav');
    let submenu = document.querySelector('.nav__subul');
    let sublink = document.querySelector('.menu-item6');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
 //         document.querySelector('nav').style.backgroundColor = "white";
            nav.classList.add("nav-scrolled");
            navwest.style.color = "black";
            navwest.style.margintop = "0px";
            navhome.style.color = "black";
            navhome.style.margintop = "100px";
            navhome.classList.remove(".nav__ul--color");
            navblog.style.color = "black";
            navblog.style.marginbottom = "100px";
        } else {
            nav.classList.remove("nav-scrolled");
            navwest.style.color = "white";
            navwest.style.margintop = "10px";
            navhome.style.color = "white";
            navhome.style.margintop = "10px";
            navhome.classList.add(".nav__ul--color");
            navblog.style.color = "white";
            navblog.classList.add(".nav__ul--color");
        }
    }
    navhome.addEventListener('mouseover', function(){
        submenu.classList.replace("hidden", "visibility");
        sublink.addEventListener('mouseout', function(){
            submenu.classList.replace("visibility", "hidden");
        });
    });
});