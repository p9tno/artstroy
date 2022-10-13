$(document).ready(function() {

    //quiz
    let total = 0;


    $('.quiz-question').each(function(indexInArray, valueOfElement) {
        let questionBlock = indexInArray + 1
        $(this).attr('data-q', questionBlock);
        $(this).find('input').attr('name', 'q-' + questionBlock)
        total = total + 1;

    });

    let lineStep = 100 / total;
    let line;



    let quizScroll;
    if ($(window).width() < 600) {
        quizScroll = $("#quiz").offset().top - 120

    } else {
        quizScroll = $("#quiz").offset().top - 70
    }

    let questionNumber = 1;
    let inputNumber;

    let elem = $('.quiz-form').find("input");


    $(elem).on('change', function() {
        $('.quiz-arrow__next').removeAttr('disabled');
    });

    $('.quiz-question label').click(function() {
        let answerNumber = $(this).find('input').attr('name');
        if ($(this).find('input').attr('type') == 'radio') {
            $('.quiz-question input[name="' + answerNumber + '"').parent('label').removeClass('active');
            $(this).addClass('active');
        } else if ($(this).find('input').attr('type') == 'checkbox') {
            if ($(this).find('input').is(':checked')) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        }

    });

    let valid = {};

    $('.quiz-arrow__next, .quiz-question input[type="radio"], .quiz-question__slider-input input[type="checkbox"]').click(function() {
        $('.quiz-hint').hide();
        $('.quiz-arrow__prev').css('display', 'flex');

        if (questionNumber < total) {
            setTimeout(() => {
                questionNumber++;
                $('.quiz-arrow__next').attr('disabled', 'true')
                validNumber = questionNumber - 1
                valid['quiestion-' + validNumber] = true;
                console.log(valid)
                if (valid['quiestion-' + questionNumber] == true) {
                    $('.quiz-arrow__next').removeAttr('disabled');
                }
                $('.quiz-question.active').hide();
                $('.quiz-question.active').removeClass('active');
                $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
                $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
                // $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
                // $('.quiz-arrow__next').attr('disabled', 'true');
                $('html, body').animate({
                    scrollTop: quizScroll
                }, 0);
                lineWidth()
            }, 500);

        } else if (questionNumber = total) {
            setTimeout(() => {
                // $('.quiz-load').show();
                $('html, body').animate({
                    scrollTop: quizScroll
                }, 0);
                $('.quiz-container').hide();
                // setTimeout(() => {
                $('.quiz-load').hide();
                $('.quiz-result').show();
                $('.quiz-result').addClass('active');

                // }, 1500);

            }, 500);

        }
    });


    $('.quiz-arrow__prev').click(function() {
        if (questionNumber > 2) {
            questionNumber--;
            if (valid['quiestion-' + questionNumber] == true) {
                $('.quiz-arrow__next').removeAttr('disabled');
                console.log('valid')
            }
            // $('.quiz-arrow__next').removeAttr('disabled');
            $('.quiz-question.active').hide();
            $('.quiz-question.active').removeClass('active');
            $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
            $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');

            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
        } else if (questionNumber == 2) {
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            questionNumber--;
            $('.quiz-arrow__next').removeAttr('disabled');
            $('.quiz-question.active').hide();
            $('.quiz-question.active').removeClass('active');
            $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
            $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
            $('.quiz-hint').css('display', 'flex');
            $('.quiz-arrow__prev').hide();
        }
        lineWidth()
    });

    // $('.quiz-result__input-phone').mask('+7(999)999-99-99')

    // $('.quiz-result__message').click(function() {
    //     $('.quiz-result__message').removeClass('active');
    //     $(this).addClass('active');
    //     $('.quiz-result__input-message').val($(this).attr('data-message'));
    //     let message = $(this).attr('data-message');
    //
    //
    //     switch (message) {
    //         case 'whatsapp':
    //             $('.quiz-result__input-phone').attr('placeholder', 'Введите ваш телефон');
    //             $('.quiz-result__input-phone').attr('type', 'tel');
    //             $('.quiz-result__input-phone').mask('+7(999)999-99-99')
    //             $('.quiz-result__input-mail').hide();
    //             break;
    //         case 'mail':
    //             $('.quiz-result__input-phone').attr('placeholder', 'Введите ваш телефон');
    //             $('.quiz-result__input-phone').attr('type', 'tel');
    //             $('.quiz-result__input-phone').mask('+7(999)999-99-99')
    //             $('.quiz-result__input-mail').css('display', 'block');
    //             break;
    //         case 'telegram':
    //             $('.quiz-result__input-phone').attr('placeholder', 'Введите ваш телеграм');
    //             $('.quiz-result__input-phone').attr('type', 'text');
    //             $('.quiz-result__input-phone').unmask()
    //             $('.quiz-result__input-mail').hide();
    //             break;
    //     }
    // });

    let lineCurrent;

    function lineWidth() {
        lineCurrent = Math.round(questionNumber / total * 100)
        $('.quiz-line__current').text(lineCurrent + '%');
        line = lineStep * (questionNumber);
        line = 'calc(' + line + '% )';
        $('.quiz-line__bg').css('width', line)
        $('.quiz-step__current').text(questionNumber);
    }

});
