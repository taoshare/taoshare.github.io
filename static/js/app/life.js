require(['jquery', 'swiper', 'bootstrap' ], function ($, Swiper) {
    $(window).resize(function () {
        if($(this).width() >= 751) {
            $("#mobile-menu").removeClass("mobile-menu-opened");
            $("#mobile-menu ul li a b").removeClass("menu-item-change");
        }
    });

    $(".mobile-navbar-icon").on('click', function () {
        //$("#mobile-menu").slideToggle("slow","linear");
        $("#mobile-menu").toggleClass("mobile-menu-opened");
        $("#mobile-menu ul li a b").toggleClass("menu-item-change");
    });

    var swiper = new Swiper('.swiper-container', {
        speed:1000,
        autoplay : {
            delay:3000
        },
        mousewheel: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})