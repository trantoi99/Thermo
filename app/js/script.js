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
        ]
    });

});
const second = 1000,
    minute = second * 60,
    hour = minute * 60;



let countDown = new Date('August 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {
        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('hours').innerText = Math.floor(distance / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second);

openImg("Group941");

function openImg(imgName) {
    var i, x;
    x = document.getElementsByClassName("picture");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(imgName).style.display = "block";
}