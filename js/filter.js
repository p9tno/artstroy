$(document).ready(function() {

    function changeSlide() {

        $( ".js-slide-price" ).slider({
            range: "min",
            value: 2500000,
            min: 1000000,
            max: 9500000,
            step: 50000,
            slide: function( event, ui ) {
                $( "#slide-price-min" ).text( thousandSeparator(ui.value) );
                // $( "#square_field" ).val( ui.value );
                // $('.quiz-arrow__next').removeAttr('disabled');

            }
        });

        // $( "#current_text" ).text( $( ".js-slide" ).slider( "value" ) );
        // $( "#square_field" ).val( $( ".js-slide" ).slider( "value" ) );

        $( ".js-slide-square" ).slider({
            range: "min",
            value:300,
            min: 200,
            max: 900,
            step: 10,
            slide: function( event, ui ) {
                $( "#slide-square-min" ).text( thousandSeparator(ui.value) );
                // $( "#square_field" ).val( ui.value );
                // $('.quiz-arrow__next').removeAttr('disabled');

            }
        });


        // $( "#current_text" ).text( $( ".js-slide" ).slider( "value" ) );
        // $( "#square_field" ).val( $( ".js-slide" ).slider( "value" ) );

    };
    changeSlide();

    function thousandSeparator(str) {
        var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;

        while(i >= 0) {
            output = main.charAt(i) + output;
            if ((len - i) % 3 === 0 && i > 0) {
                output = ' ' + output;
            }
            --i;
        }

        if (parts.length > 1) {
            output += '.' + parts[1];
        }
        return output;
    };

    function resetFilter() {
        let reset = $('#portfolio-reset');
        reset.on('click', function(event) {
            event.preventDefault();

            // console.log('reset');

            $('.js-slide-price').slider("value", 2500000);
            $( "#slide-price-min" ).text( thousandSeparator(2500000) );

            $('.js-slide-square').slider("value", 300);
            $( "#slide-square-min" ).text( thousandSeparator(300) );



            $(".portfolio__filters :checkbox").each(function() {
                $(this).prop('checked', false);

                // $(".filter__item").show();
                // $(".filter__item").fadeIn();
            });


        });
    }
    resetFilter();


});
