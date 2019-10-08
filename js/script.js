$(document).ready(function(){
  $("#header-slider").owlCarousel({
      items: 1,
      autoplay: false,
      dots: true,
//      dotsContainer: ".dots-container-radio",
//      dotsClass: '.dots-container-radio'
      
  });
});
$(document).ready(function(){
  $("#main-slider").owlCarousel({
      items: 1,
      autoplay: false,
      nav: true,
//      navText: ["<p class="slide-nav-text">Доставка</p>","<p class="slide-nav-text">Гарантия</p>", "<p class="slide-nav-text">Кредит</p>"]
  });
});
