$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    let menu = $('.menu ul');
    let tourProgramTitle = $(".tour-program .title");
    let readMoreForReviews = $('.reviews .read-more');
    let readMoreForTourProgram = $('.tour-program .read-more');

    $('.input.input-phone').mousedown(function () {
        $(this).inputmask("8 (033) 999-99-99");
    });

    $('#burger').click(function () {
        $('.header').addClass('open').find('.menu').prepend('<h3 class="menu-title">Меню</h3>');
    });

    $('.header .xmark').click(function () {
        $(this).parent().parent().parent().addClass('close').removeClass('open').removeClass('close').find('.menu-title').remove();
    });

    menu.children().eq(0).click(function () {
        $('html, body').animate({
            scrollTop: tourProgramTitle.offset().top
        }, 1000);
    });

    menu.children().eq(1).click(function () {
        $('html, body').animate({
            scrollTop: $(".tour-dates .title").offset().top
        }, 1000);
    });

    menu.children().eq(2).click(function () {
        $('html, body').animate({
            scrollTop: $(".photos .title").offset().top
        }, 1000);
    });

    menu.children().eq(3).click(function () {
        $('html, body').animate({
            scrollTop: $(".reviews .title").offset().top
        }, 1000);
    });

    $('.offer .offer-action').click(function () {
        $('html, body').animate({
            scrollTop: tourProgramTitle.offset().top
        }, 1000);
    });

    $('.tour-dates-slider .btn').click(function () {
        let orderText = $('.order .order-text');
        let form = $('.order .form');
        orderText.css('animation', 'none');
        form.css('animation', 'none');
        $('html, body').animate({
            scrollTop: $(".order .order-text").offset().top
        }, 1000);
        orderText.css('animation', 'heartbeat 4s ease');
        form.css('animation', 'heartbeat 4s ease');
    });

    $('.offer-video .video-play').on('click', function () {
        $('.offer-video .video-background').fadeOut();
        $('.offer-video .video-play').fadeOut();
        document.getElementsByTagName('iframe')[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
    });

    $('.image').magnificPopup({
        type: 'image'
    });

    $('.tour-dates-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.tour-dates .slick-button.left'),
        nextArrow: $('.tour-dates .slick-button.right'),
        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('.photos-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.our-gallery .photos-slider-container .slick-button.left'),
        nextArrow: $('.our-gallery .photos-slider-container .slick-button.right'),
    });

    $('.photos-slider-mini').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.our-gallery .photos-slider-container-mini .slick-button.left'),
        nextArrow: $('.our-gallery .photos-slider-container-mini .slick-button.right'),
    });

    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.our-gallery .reviews .slick-button.left'),
        nextArrow: $('.our-gallery .reviews .slick-button.right'),
        responsive: [
            {
                breakpoint: 958,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    readMoreForTourProgram.click(function () {
        let img = $(this).parent().parent().find('.program-item-image');
        $(this).css('display', 'none');
        img.css('display', 'none');
        $(this).parent().parent().parent().addClass('mini').find('.delete-text').css('display', 'inline-block');
        $(this).parent().parent().find('.xmark').click(function () {
            $(this).parent().parent().removeClass('mini').find('.delete-text').css('display', 'none');
            $(this).prev().prev().find('.read-more').css('display', 'flex');
            img.css('display', 'block');
        });
    });

    readMoreForReviews.click(function () {
        $(this).parent().addClass('mini');
    });

    readMoreForReviews.next().click(function () {
        $(this).parent().removeClass('mini');
    });


    $('.book-a-call').click(function () {
        $('.new-form-container').css('display', 'flex').children().css('display', 'flex').find('.xmark').click(function () {
            $(this).parent().css('display', 'none').parent().css('display', 'none');
            $(this).prev().find('.error-input').css('visibility', 'hidden');
            $(this).prev().find('.input-name').css('border', 'none');
            $(this).prev().find('.input-phone').css('border', 'none');
        });
    });

    $('.form .btn').click(function () {
        let loader = $('.loader');
        let name = $(this).parent().find('.input.input-name');
        let tel = name.next().next().next();
        let form = $(this).parent();
        let hasError = false;
        let popup = $('.popup');

        form.find('.error-input').css('visibility', 'hidden');
        name.css('border', 'none');
        tel.css('border', 'none');

        if (!name.val().trim()) {
            name.next().css('visibility', 'visible');
            name.css('border', '3px solid red');
            hasError = true;
        }

        if (!tel.val().trim()) {
            tel.next().css('visibility', 'visible');
            tel.css('border', '3px solid red');
            hasError = true;
        }

        $(this).blur(function () {
            form.find('.error-input').css('visibility', 'hidden');
            name.css('border', 'none');
            tel.css('border', 'none');
        });

        form.find('.input').blur(function () {
            form.find('.error-input').css('visibility', 'hidden');
            name.css('border', 'none');
            tel.css('border', 'none');
        });


        if (!hasError) {
            loader.css('display', 'flex');
            // $.ajax({
            //     method: "POST",
            //     url: "http://testologia.site/checkout",
            //     data: {name: name.val(), phone: tel.val()}
            // })
            //     .done(function (message) {
                    loader.hide();
            //         if (message.success) {
                        if (form.parent().parent().hasClass('new-form-container')) {
                            form.parent().hide().parent().hide();
                        }
                        popup.css('display', 'flex').parent().css('display', 'flex');
            //         } else {
            //             alert("Возникла ошибка при оформлении заявки. Пожалуйста, позвоните нам.");
            //         }
            //     });
            popup.find('.xmark').click(function () {
                popup.css('display', 'none').parent().css('display', 'none');
            });
            popup.find('.btn.popup-btn').click(function () {
                popup.css('display', 'none').parent().css('display', 'none');
                form.css('display', 'flex');
                form.prev().css('display', 'block');
            });
            name.val('');
            tel.val('');
        }
    });

    $('.circle').click(function () {
        let email = $('.footer #email');
        let popup = $('.popup2');
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test(email.val())) {
            email.parent().addClass('red').css('background', 'linear-gradient(to left, red 0%, red 100%) left top / 100% 3px no-repeat,' +
                'linear-gradient(to left, red 0%, red 100%) left bottom / 100% 3px no-repeat');
        } else {
            email.val('');
            email.parent().removeClass('red');
            email.parent().css('background', '');
            popup.css('display', 'flex').find('.btn.popup-btn').click(function () {
                $(this).parent().css('display', 'none');
            });
        }
    });
});
