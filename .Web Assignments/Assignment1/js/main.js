$('.offer-slider').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],
});

$('.about-slider').slick({
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



