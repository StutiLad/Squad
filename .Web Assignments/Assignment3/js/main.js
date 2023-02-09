let nav = document.getElementById('top-nav');

window.onscroll = function () {
    let scroll = window.pageYOffset;
    if (scroll < 550) {
        nav.style.display = '';
    } else if (scroll >= 550) {
        nav.style.display = 'none';
    }
}

$('.image-slider').slick({
    autoplay: true,
    autoplaySpeed: 50000,
});
