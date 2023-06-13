var header = document.querySelector('.header');
var header_navbar = document.querySelector('.header__navbar')
    var mobileMenu = document.querySelector('.header__bar');
    var headerhight = header.clientHeight; 
    mobileMenu.onclick = function () {
        var isclose = header.clientHeight === headerhight;
        if(isclose){
            header.style.height = 'auto';
            header_navbar.style.overflow = 'visible';
        }else{
            header.style.height = null;
            header_navbar.style.overflow = 'hidden';
        }
    }