
$(document).ready(function () {
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    adaptiveHeight: true
                }
            }
        ]
    })


    $('.articles-slider').slick({
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    })

})

function popup() {
    console.log("You've new message...!!")
}

