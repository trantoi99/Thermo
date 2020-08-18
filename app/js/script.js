$(document).on("click", function() {
    $('#btn-1').click(function() {
        $('#text-16--1').toggle();
        $("i", this).toggleClass("las la-plus las la-minus");
    });
    $('#btn-2').click(function() {
        $('#text-16--2').toggle();
        $("i", this).toggleClass("las la-plus las la-minus");
    });
    $('#btn-3').click(function() {
        $('#text-16--3').toggle();
        $("i", this).toggleClass("las la-plus las la-minus");
    });
    $('#btn-4').click(function() {
        $('#text-16--4').toggle();
        $("i", this).toggleClass("las la-plus las la-minus");
    });
});

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
    if (timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress(600, 600, $('#progressBar'));

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});