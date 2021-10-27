$(document).ready(function () {
    $(".owl-carousel-header").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1

    });

    $(".owl-carousel-news").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".owl-carousel-objects").owlCarousel({
        loop: true,
        margin: 90,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $(".owl-carousel-timeline").owlCarousel({
        loop: false,
        items: 5,
        nav: true,
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // $('.slick-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });
});