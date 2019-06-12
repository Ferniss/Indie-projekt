document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelector('.nav');
    let navwest = document.querySelector('#h1');
    let navhome = document.querySelector('.ul-nav');
    let navblog = document.querySelector('#ul-nav');
    let submenu = document.querySelector('.nav__subul');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
 //         document.querySelector('nav').style.backgroundColor = "white";
            nav.classList.add("nav-scrolled");
            navwest.style.color = "black";
            navwest.style.margintop = "0px";
            navhome.style.color = "black";
            navhome.style.margintop = "0px";
            navhome.classList.remove(".nav__ul--color");
            navblog.style.color = "black";
        } else {
 //         document.querySelector('nav').style.padding = "30px";
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
        if (submenu.style.display == "none") {
            submenu.style.display == "block";
        }else{
            submenu.style.display == "none";
        }
        
    });
});