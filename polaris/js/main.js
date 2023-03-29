$(document).ready(function () {
  $(".review-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".articles-slider").slick({
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });
});

function popup() {
  console.log("You've new message...!!");
}

var x = window.matchMedia("(max-width: 575px)")
myFunction(x)

function myFunction(x) {
  if (x.matches) {
    $(document).ready(function () {
      $("footer #help").click(function () {
        $("footer #help-sub").toggle("slide slow");
        $('footer #help i:first-child').toggle();
        $('footer #help i:last-child').toggle();
      });
      $("footer #legal").click(function () {
        $("footer #legal-sub").toggle("slide slow");
        $('footer #legal i:first-child').toggle();
        $('footer #legal i:last-child').toggle();
      });
      $("footer #link").click(function () {
        $("footer #link-sub").toggle("slide slow");
        $('footer #link i:first-child').toggle();
        $('footer #link i:last-child').toggle();
      });
    });
  }
}


$(document).ready(function () {
  $('.faq .section-text ul li:nth-child(1)').click(function () {
    $('.faq .section-text ul li:nth-child(1) i:nth-child(2)').toggle();
    $('.faq .section-text ul li:nth-child(1) i:nth-child(1)').toggle();
    $(".faq .section-text ul li:nth-child(1) p").toggle();
  })

  $('.faq .section-text ul li:nth-child(2)').click(function () {
    $('.faq .section-text ul li:nth-child(2) i:nth-child(2)').toggle();
    $('.faq .section-text ul li:nth-child(2) i:nth-child(1)').toggle();
    $(".faq .section-text ul li:nth-child(2) p").toggle();
  })
  $('.faq .section-text ul li:nth-child(3)').click(function () {
    $('.faq .section-text ul li:nth-child(3) i:nth-child(2)').toggle();
    $('.faq .section-text ul li:nth-child(3) i:nth-child(1)').toggle();
    $(".faq .section-text ul li:nth-child(3) p").toggle();
  })
  $('.faq .section-text ul li:nth-child(4)').click(function () {
    $('.faq .section-text ul li:nth-child(4) i:nth-child(2)').toggle();
    $('.faq .section-text ul li:nth-child(4) i:nth-child(1)').toggle();
    $(".faq .section-text ul li:nth-child(4) p").toggle();
  })
  $('.faq .section-text ul li:nth-child(5)').click(function () {
    $('.faq .section-text ul li:nth-child(5) i:nth-child(2)').toggle();
    $('.faq .section-text ul li:nth-child(5) i:nth-child(1)').toggle();
    $(".faq .section-text ul li:nth-child(5) p").toggle();
  })
})
