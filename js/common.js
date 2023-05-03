/* popup */
$(function(){
  $('.close').on('click', function(){
    $('.popup').css('display', 'none');
  });
});


/* header scroll */
$(function(){
  $(window).scroll(function(){
    var top = $(this).scrollTop();

    if(top > 0){
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
});


/* login */
$(document).ready(function(){

  $('#login').on('click', function(){
    $('.black-background').show();
  });

  $('.close_btn').click(function(e){
    e.preventDefault();
    $('.black-background').hide();
 
  });

  $('.login_btn').click(function(){
    if($('.searchId').val() == ''){
      alert('아이디를 입력하세요');
    }else if($('.searchPwd').val() == ''){
      alert('비밀번호를 입력하세요');
    } else{
      alert('로그인되었습니다');
    }
  })
});


/* scroll_top */
$(document).ready(function(){
  var scrollBtn = '.scroll_top a';
  var speed = 1700;

  $(window).scroll(function(){
    var sTop = $(this).scrollTop();
  
    if(sTop > 200){
      $(scrollBtn).parent().stop().fadeIn(600);
    }else{
      $(scrollBtn).parent().stop().fadeOut(600);
    }
    
    var pointHeight = $(document).height() - $('footer').outerHeight() - $(window).height();
    
    if(sTop > pointHeight){
      $(scrollBtn).parent().addClass('active');
    }else{
      $(scrollBtn).parent().removeClass('active');
    }
    
    speed = sTop / 2;

    $(scrollBtn).click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop : 0
      },speed);
    });
  });
});


/* sub_nav */

$(document).ready(function(){
  var gnb = '.gnb';
  var main = '.main_nav';
  var sub = '.sub_nav';
  var bg = '.gnb_bg';
  var speed = 'fast';

  $(gnb).hover(function(){
    $(sub).add(bg).stop().slideDown(speed);
  }, function(){
    $(sub).add(bg).stop().slideUp(speed);
    $(main).addClass('active');
  });

  $(main).first().focus(function(){
    $(gnb).trigger('mouseenter');
    $(this).addClass('active');
  });

  $(main).focus(function(){
    $(main).removeClass('active');
    $(this).addClass('active');
  });

  $(sub).last().find('a:last').keydown(function(e){
    if(e.keyCode == 9){
      if(!e.shiftKey){
        $(gnb).trigger('mouseleave');
      }
    }
  });

  $(main).first().keydown(function(e){
    if(e.keyCode == 9){
      if(e.shiftKey){
        $(gnb).trigger('mouseleave');
      }
    }
  });

  $(sub).find('li:last a').focus(function(){
    $(main).removeClass('active');
    $(this).parent(sub).prev().addClass('active');
  });

});