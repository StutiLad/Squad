
let nav = document.getElementById('nav');
nav.style.backgroundColor = 'transparent';
window.onscroll = function () {
    let scroll = window.pageYOffset;
    if (scroll < 550) {
        nav.style.backgroundColor = "transparent";
    } else if (scroll >= 550) {
        nav.style.backgroundColor = 'black';
    }
}

$('.image-slider').slick({
    autoplay: true,
    autoplaySpeed: 50000,
});

$('.testimonial-card').slick({
    dots:true,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true
  });

  $('.follow-slider').slick({
    slidesToShow: 6
  });