
//  Preloader

$(window).on('load', function () {

    $('#status').delay(2500).fadeOut();
    $('#preloader').delay(2500).fadeOut('slow');
    $('body').delay();
    $('.hide').delay(2500).fadeIn();

});

//  End of Preloader



//  ScrollReveal


const sr = ScrollReveal();

sr.reveal('.about-me', {

    origin: 'top',
    distance: '50px',
    duration: 4000,
    scale: 0.5

});



//  Scroll To Top


$(document).ready(function () {

    //  show / hide button

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $('.scrollTop').fadeIn();

        } else {

            $('.scrollTop').fadeOut();
        }

    });

    //  Smooth Scrolling to Top

    $('.scrollTop').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 3000)
    });


    //  Smooth Scroll Down

    $('a[href*="#"]').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 3000);

    });



});