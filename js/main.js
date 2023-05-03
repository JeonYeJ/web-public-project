/* main */
$(document).ready(function(){
  var swiper = new Swiper("main .swiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "main .swiper-pagination",
      clickable: false,
    },
    navigation: {
      nextEl: "main .swiper-button-next",
      prevEl: "main .swiper-button-prev",
    },
    loop: true,
    allowTouchMove: false,
    speed: 600
  });
});


/* best_menu */
$(document).ready(function(){
  $('.best_menu_btn li a').click(function(e){
    e.preventDefault();
    
    $('.best_menu_btn li a').removeClass('active');
    $(this).addClass('active');

    var index = $(this).parent().index();

    $('.best_menu .best_menu_list > div').removeClass('active');
    $('.best_menu .best_menu_list > div').eq(index).addClass('active');
  });
});


/* news&event */

$(function(){
  $('.news_event_content .tab_bar a').click(function(e){
    e.preventDefault();
    
    $('.news_event_content .tab_bar a').removeClass('active');
    $(this).stop().addClass('active');
   
    var index = $(this).parent().index();

    $('.event_content_list ul').removeClass('active');
    $('.event_content_list ul').eq(index).addClass('active');
  });


  
  $('.event_content_list .news_content a').click(function(e){
    e.preventDefault();

  });

});