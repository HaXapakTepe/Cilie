$(function () {

  $(".menu a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

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
    starWidth: "35px",
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

  $('.menu__link').click(function (e) {
    e.preventDefault();
    $('.menu__burger').removeClass('menu__burger--active');
  });

  $('.menu__link').on('click', function () {
    $(this).toggleClass('menu__link--active');
    $('.menu__link').not($(this)).removeClass('menu__link--active');
  });

  $('.menu__link').click(function (e) {
    e.preventDefault();
    $('.menu__list').removeClass('active');
  });

  $('.menu__link').click(function (e) {
    e.preventDefault();
    $('.menu__list').fadeIn(500);
    $('html').removeClass('no-scroll-menu');
  });

  $('.menu__burger').on('click', function () {
    $('html').toggleClass('no-scroll-menu');
  });

  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('active');
  });

  $('.menu__burger').on('click', function () {
    $('.menu__burger').toggleClass('menu__burger--active');
  });

  $('.menu__burger').on('click', function () {
    $('.logo').toggleClass('logo--active');
  });

  $('.menu__burger').on('click', function () {
    $('.menu__text').toggleClass('menu__text--active');
  });

  $('.language__link').on('click', function () {
    $(this).toggleClass('language__link--active');
    $('.language__link').not($(this)).removeClass('language__link--active');
  });

  $('.language__link').on('click', function () {
    $('.language__link').not($(this)).removeClass('language__link--ru language__link--active');
  });

  $('.faq__subtitle').click(function (event) {
    if ($('.faq__item').hasClass('faq__one')) {
      $('.faq__subtitle').not($(this)).removeClass('active');
      $('.faq__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.link--open').click(function (e) {
    e.preventDefault();
    $('.popup').fadeIn(500);
    $('html').addClass('no-scroll-popup');
  });

  $('.popup__close').click(function () {
    $('.popup').fadeOut(500);
    $('html').removeClass('no-scroll-popup');
  });

  $('.popup__btn').click(function (e) {
    e.preventDefault();
    $('.confirmation').fadeIn(500);
    $('html').addClass('no-scroll-confirmation');
  });

  $('.confirmation__close').click(function () {
    $('.confirmation').fadeOut(500);
    $('html').removeClass('no-scroll-confirmation');
  });

});