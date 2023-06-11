$(document).ready(function(){
    $('.img__slick-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        draggable: false,
        arrows: false,
        prevArrow:`<button type='button' class='slick-prev slick_arrows'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick_arrows'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots:true,
        // fade: true,
        // cssEase: 'linear'
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false
              }
            }
        ]
    });
  });