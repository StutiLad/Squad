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
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    })
})



