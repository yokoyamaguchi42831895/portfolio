$(function () {
    var $nav = $('#global-nav');
    var offset = $nav.offset();
    var navHeight = $nav.innerHeight();
    var headerInner = $('#top-head .inner');
  
    //ページ内スクロール
    $('a[href^="#"]').on('click', function () {
      var speed = 300;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - navHeight;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
    // ONクリック
    $(function(){
      $('li a').click(function(){
        $('li a').removeClass('active');
        $(this).addClass('active');
      })
    })
    //ページトップへもどる
    jQuery(window).on("scroll", function($) {
      if (jQuery(this).scrollTop() > 100) {
        jQuery('.floating').show();
      } else {
        jQuery('.floating').hide();
      }
    });
    
    jQuery('.floating').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
});

$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').fadeToggle(500);
  $('body').toggleClass('noscroll');
});

if( $(window).width() < 768 ){
  $('.nav-item>a').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
  });
}


$(function() {
  // validate
  $("#contact-form").validate({
    // submit handler
    submitHandler: function(form) {
      //form.submit();
        $(".message").show();
        $(".message").fadeOut(4500);
    }
  });
});

new WOW().init();