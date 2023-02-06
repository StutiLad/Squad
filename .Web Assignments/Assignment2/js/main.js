
let nav = document.getElementById('nav');
nav.style.backgroundColor = 'transparent';
window.onscroll = function () {
    let scroll = window.pageYOffset;
    if (scroll < 600) {
        nav.style.backgroundColor = "transparent";
    } else if (scroll >= 600) {
        nav.style.backgroundColor = 'black';
    }
}

$('.image-slider').slick({
    autoplay: true,
    autoplaySpeed: 50000,
});