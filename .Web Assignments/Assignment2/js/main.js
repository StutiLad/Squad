
let nav = document.getElementById('nav');
nav.style.backgroundColor = 'transparent';
window.onscroll = function () {
    let scroll = window.pageYOffset;
    if (scroll < 500) {
        nav.style.backgroundColor = "transparent";
    } else if (scroll >= 500) {
        nav.style.backgroundColor = 'black';
    }
}

$('.image-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 50000,
});

$('.testimonial-card').slick({
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true
});

$('.follow-slider').slick({
    slidesToShow: 6,
    responsive: [
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            },
        },
    ],
});