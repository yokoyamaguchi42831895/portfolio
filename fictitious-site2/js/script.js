$( '#header .header-nav a' ).on( 'click', function() {
    var href = $( this ).attr( 'href' );
    $( '#header .header-nav a' ).removeClass( 'active' );
    $( 'a[href="' + href + '"]' ).addClass( 'active' );
});

//SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#header'
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

jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 200) {
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

var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

jQuery(function($){
    var ua = navigator.userAgent;
    if ( ua.indexOf( 'iPhone' ) > 0 || ua.indexOf( 'iPad' ) > 0) {
      // iPhoneまたはiPadの場合
        $('.end-bg').css({
        // プロパティ名にハイフンが入っている場合は''で囲む
        'background-attachment': 'scroll',
        });
    }
});