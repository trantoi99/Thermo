$(document).on("click", function() {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
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