$(function () {

    new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 100) {
            $('header').addClass('scroll');
            $('header a').removeClass('cl');
            /*$('.cl').css("color", "#343a40");*/
        } else {
            $('header').removeClass('scroll');
            $('header a').addClass('cl');
            //            $('.cl').css("color", "#fff");
        }
    });

})
