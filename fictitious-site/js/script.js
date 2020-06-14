$( '#header .header-nav a' ).on( 'click', function() {
    var href = $( this ).attr( 'href' );
    $( '#header .header-nav a' ).removeClass( 'active' );
    $( 'a[href="' + href + '"]' ).addClass( 'active' );
});

    //SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        header: '#header'
    });

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 500,
        autoplay: {
        delay: 5000,
        disableOnInteraction: true
        },
    });


    //ドロワーメニューの利用宣言
        $(document).ready(function() {
        $('.drawer').drawer();
    });

    //drawer
    $(document).ready(function() {
        $('.drawer').drawer();
        $('.drawer-nav').on('click', function() {
            $('.drawer').drawer('close');
        });
    });
    
    //WOW
    new WOW().init();

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
            }, 500);
        return false;
    });
