$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  $('.price-slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          infinite: false,
          slidesToShow: 2.5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2
        }
      }
    ]
  });

  $('.reviews-slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [{
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.star').rateYo({
    starWidth: "30px",
    normalFill: "#FFFFFF",
    ratedFill: "#F4A446",
    readOnly: true,
  });

  $('.star-adaptive').rateYo({
    starWidth: "18px",
    normalFill: "#FFFFFF",
    ratedFill: "#F4A446",
    readOnly: true,
  });

  $('.menu__item').on('click', function () {
    $('.menu__link').toggleClass('menu__link--active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__burger').toggleClass('menu__burger--active');
  });

  $('.language__link').on('click', function () {
    $('.language__link').toggleClass('language__link--active');
  });

  $('.faq__subtitle').click(function (event) {
    if ($('.faq__item').hasClass('faq__one')) {
      $('.faq__subtitle').not($(this)).removeClass('active');
      $('.faq__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.popup__open').click(function (e) {
    e.preventDefault();
    $('.popup').fadeIn(500);
    $('html').addClass('no-scroll');
  });

  $('.popup__close').click(function () {
    $('.popup').fadeOut(500);
    $('html').removeClass('no-scroll');
  });

});