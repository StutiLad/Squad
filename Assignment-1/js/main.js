window.addEventListener('load', function () {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        draggable: true,
        dots: "#dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },

        responsive: [
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    })
})



