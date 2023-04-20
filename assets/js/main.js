(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
    $(".siteBar-btn i").toggleClass('fa-times');   
  }); 


  // owlCarousel
  $(".Integration_slider").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      '<i class=""></i>',
      '<img src="assets/img/Integration/right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });
 
})(jQuery);
