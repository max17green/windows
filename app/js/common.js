$(".slider").slick({
    slidesToShow: 3,
    arrows: true,
    // normal options...
    infinite: false,
    prevArrow: '<i class="fa fa-caret-left"></i>',
    nextArrow: '<i class="fa fa-caret-right"></i>',

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});