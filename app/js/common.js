$(".slider").slick({
    slidesToShow: 3,
    arrows: true,
    // normal options...
    infinite: true,
    prevArrow: '<i class="fa fa-caret-left"></i>',
    nextArrow: '<i class="fa fa-caret-right"></i>',
    dots: false,
    //variableWidth: true,
    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 2
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 1
        }

    }, {
        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});

$(".feedback form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        tel: {
            required: true,
            minlength: 15,
            maxlength: 15
        },
        time: {
            required: false,
            minlength: 16,
            maxlength: 16
        }
    },
    messages: {
        name: {
            required: 'Имя обязательно для заполнения',
            minlength: 'Имя должно содержать не менее {0} символов',
            maxlength: 'Имя должно содержать не более {0} символов'
        },  
        tel: {
            required: 'Телефон обязателен для заполнения',
            minlength: 'Телефон должен содержать 10 символов',
            maxlength: 'Телефон должен содержать 10 символов'
        },
        time: {
            required: 'Время звонка обязательно для заполнения',
            minlength: 'Заполните время консультации',
            maxlength: 'Заполните время консультации'
        }
    }
    //form.submit() or form.ajaxSubmit()
    //submitHandler

});

$('.feedback form input').on('change', function() {
    if ( $(".feedback form").valid() ) {
        $('.send').css("opacity","1.0");
        $('.send').removeAttr('disabled');
    } else {
        $('.send').css("opacity","0.4");
        $('.send').attr('disabled','disabled');
    }
});

$(".feedback form input[name='tel']").mask("+7(999)999-9999");
$(".feedback form input[name='time']").mask("C 99:99 до 99:99");

var arr = ["bg.jpg","slide42.jpg"];   // имена картинок
var path = "../img/"; // каталог, где лежат картинки.
var i = 0; // индекс текущего изображения.

function next() {
    
    i = ++i%arr.length;
    $(".bgimg").fadeOut(1000, function() {
        $(".bgimg").css("background-image", "url("+path + arr[i]+")");
    });
    
    $(".bgimg").fadeIn(500);
    
}

setInterval(function(){next()},5000);

$(".fa-bars").on('click', function() {
    
    $(".menu").slideToggle();
});

$('.fa-times').click(function() {
    $('.wrap-gift').css('display','none');
});