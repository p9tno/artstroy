// window.onload = function () {
//     console.log('ok!');
//     function preloader() {
//         $(()=>{
//
//             setTimeout( () => {
//                 let p = $('#preloader');
//                 p.addClass('hide');
//
//                 setTimeout( () => {
//                     p.remove()
//                 },1000);
//
//             },1000);
//         });
//     }
//     preloader();
// }

$(document).ready(function() {

    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    preloader();
    // setTimeout( ()=> preloader(),15000 )


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            // $('.header__top').toggleClass('header__top_open');
            $('.header__bottom').toggleClass('header__bottom_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            // $('.nav_open_bg').toggleClass('nav_open_bg_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

    // start modal
    function showModal() {
        $('.show_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');

            $(id).modal('show');
        });
    }
    showModal();

    $('.modal').on('show.bs.modal', () => {
        // let openedModal = $('.modal.in:not(.popapCalc)');
        let openedModal = $('.modal');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });

    function showDownloadModal() {
        if (localStorage.getItem('showDownloadModal') == 'disable') {
        } else {
            setTimeout(function () {
                $('#download').modal('show');
            }, 30000);

            $('#closeModalDownload').on('click', function() {
                localStorage.setItem('showDownloadModal', 'disable');
            })
        }
        // console.log(localStorage.getItem('showDownloadModal'));
        // localStorage.clear();
    };
    showDownloadModal();
    // end modal

    // function activeNav() {
    //     $('.menu-item').on('click', function() {
    //         $('.menu-item').removeClass('current-menu-item');
    //         $(this).addClass('current-menu-item');
    //     })
    // };
    // activeNav();

    function uploadYoutubeVideoForModal() {
        if ( $( ".youtubeModal-js" ) ) {

            $( '.youtubeModal-js' ).on( 'click', function () {
                $('#modalVideo').modal('show');

                let wrapp = $( this ).closest( '.youtubeModal-js' );
                let videoId = wrapp.attr( 'id' );
                let iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

                // доп параметры для видоса
                // if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

                // Высота и ширина iframe должны быть такими же, как и у родительского блока
                let iframe = $( '<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'allow': "autoplay"
                } )
                $(".modalVideo__wraper").append(iframe);

                $("#modalVideo").on('hide.bs.modal', function () {
                    $(".modalVideo__wraper").html('');
                });

            } );
        }
    };
    uploadYoutubeVideoForModal();


    function collapsed() {
        let toggle = $('[data-collapse]');

        toggle.on('click', function() {
            let id = $(this).data('collapse'),
            body = $('[data-collapse-body="'+id+'"]'),
            wrap = body.closest('[data-collapse-wrapper]'),
            preview = $('.content__preview');
            console.log(preview);

            if (!id) {
                // $('[data-collapse-wrapper]').removeClass('open');
                body = $(this).parent().find('[data-collapse-body]');
                $(this).toggleClass('open');
                preview.toggleClass('open');
                if ($(this).hasClass('open')) {
                    body.slideDown();
                } else {
                    body.slideUp();
                }
            } else if (id === 'all') {
                body.slideDown();
                preview.addClass('open');
                toggle.addClass('open');
            } else {
                body.slideToggle();
                preview.toggleClass('open');
                $(this).toggleClass('open');
            }
        });
    }
    collapsed();


    function doTabs() {
        $('.tabs__item').on('click', function() {
            $('.tabs__item').removeClass('active');
            $(this).addClass('active');

            $('.tabContent__item').removeClass('active');
            $($(this).data('tab')).addClass('active');
        });
    };
    doTabs();

    function showHideTask() {
        $(".task__grid").on('mouseenter', '.task__item', function() {
            // console.log('mouse on');
            let wrap = $(this).find('.task__wrap');
            wrap.slideDown(300)

        });

        $(".task__grid").on('mouseleave', '.task__item', function() {
            // console.log('mouse of');
            let wrap = $(this).find('.task__wrap');
            wrap.slideUp(300)
        });
    }
    showHideTask();

    function showHideSubmenu() {
        $(".menu").on('mouseenter', '.menu-item-has-children', function() {
            // console.log('mouse on');
            let wrap = $(this).closest('.header__bottom');
            wrap.addClass('open_sub_menu');

        });

        $(".menu").on('mouseleave', '.menu-item-has-children', function() {
            let wrap = $(this).closest('.header__bottom');
            wrap.removeClass('open_sub_menu');

        });
    }
    showHideSubmenu();

    function addNameFile() {
        $('input[type="file"]').change(function (e) {
            // console.log('change');
            var text = $(this).closest('label').attr('data-text');
            // var container = $(this).closest('.tab-item');
            if (typeof e.target.files[0] == 'undefined') {
                var fileName = text;
                $(this).parent().removeClass('active');
            } else {
                var fileName = e.target.files[0].name;
                $(this).parent().addClass('active');
                fileName = fileName.substring(0, 20);
                // console.log(fileName);
            }
            $(this).parent().find('p').text(fileName);
            // console.log(fileName);

            // container.find('[controlBtn_JS]').removeClass('disabled');
        });

    }
    addNameFile();


    // <div class="tabs-wrapper">
    //     <div class="tabs">
    //         <span class="tab">Вкладка 1</span>
    //         <span class="tab">Вкладка 2</span>
    //         <span class="tab">Вкладка 3</span>
    //     </div>
    //     <div class="tabs-content">
    //         <div class="tab-item">Содержимое 1</div>
    //         <div class="tab-item">Содержимое 2</div>
    //         <div class="tab-item">Содержимое 3</div>
    //     </div>
    // </div>

    // $('.tabs-wrapper').each(function() {
    //     let ths = $(this);
    //     ths.find('.tab-item').not(':first').hide();
    //     ths.find('.tab').click(function() {
    //         ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
    //         ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    //     }).eq(0).addClass('active');
    // });


    // function doDrop() {
    //     $('.drop__toggle').on('click', function() {
    //         // $('.drop__list').toggleClass('open');
    //         $(this).toggleClass('active');
    //         $(this).closest('.drop').find('.drop__list').toggleClass('open');
    //     });
    // };
    // doDrop();
    function hideClip() {

        if (localStorage.getItem('hideClip') !== 'hide') {

            $('.clip').addClass('hide');

            $('.lowerpanel').addClass('lowerpanel_bottom');

            setTimeout(function(){
                $('.lowerpanel').removeClass('lowerpanel_bottom');

                setTimeout(function(){
                    $('.clip').removeClass('hide');
                }, 300);
                // $('.clip').removeClass('hide');


                localStorage.setItem("hideClip", "hide");
                // console.log('removeClass hide');
            }, 30000);
        }

        $('.clip-toggle-js').click(function(event) {
            $('.clip').addClass('hide');
            // $('.lowerpanel').addClass('lowerpanel_bottom');

            setTimeout(function(){
                $('.lowerpanel').addClass('lowerpanel_bottom');
            }, 300);

            if (localStorage.getItem('hideClip') == 'hide') {
                localStorage.removeItem("hideClip", "hide");

            } else {
                localStorage.setItem("hideClip", "hide");
                console.log('сохранить пару ключ/значение.');
            }

        });

    }
    hideClip();

    // scrollTop
    $(document).ready(function(){
        //отменяем стандартную обработку нажатия по ссылке
        $(".toTop").on("click","a", function (event) {
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>500){
                $('.toTop').fadeIn(900)
            }else{
                $('.toTop').fadeOut(700)
            }
        });
    });

    // end scrollTop





    // start select2

    function addIcon(icon) {
        if (!icon.id) {
            return icon.text;
        }

        let $icon = $(
            '<span><span></span><i></i></span>'
        );

        $icon.find("span").text(icon.text);
        $icon.find("i").attr("class", "icon_" + icon.element.value.toLowerCase());

        return $icon;

    }

    $('.select').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        // tags: true,
        templateSelection: addIcon,
    });

    // end select2

    $(function(){
        $(".tel").mask("+7 ( 9 9 9 ) - 9 9 9 - 9 9 - 9 9");
    });


    $('.select').on('change',function() {
        let val = $(this).val();
        let form = $(this).closest('.form');
        let phone = form.find('.form__row_phone_js');
        let mail = form.find('.form__row_email_js');

        if ( val == 'mail'){
            mail.removeClass('form__row_hide');
            mail.find('input').prop('required',true);

            phone.addClass('form__row_hide');
            phone.find('input').prop('required',false);

        } else {
            mail.addClass('form__row_hide');
            mail.find('input').prop('required',false);

            phone.removeClass('form__row_hide');
            phone.find('input').prop('required',true);
        }
    })

    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.42, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
        orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
        before_label: 'До', // подпись 'до'
        after_label: 'После', // подпись 'после'
        no_overlay: true, // не показывать затемнение с надписями 'до' и 'после'
        move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
        move_with_handle_only: true, // двигать слайдер только за его "бегунок"
        click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
    });


    function addDataFancybox() {
        let item = $('.itemForDataFancybox_js');
        let num = 0;

        item.each(function(index, el) {
            $(this).find('a').attr('data-fancybox', num);
            num++;
        });
    }
    addDataFancybox();

    function stikyMenu() {

        // let HeaderTop = $( '.header__bottom' ).offset().top;

        let HeaderTop = $( '.header__bottom' ).offset().top;
        // console.log(HeaderTop);
        // let HeaderTop = $( 'header' ).offset().top + $( '.section' ).innerHeight();
        let currentTop = $( window ).scrollTop();

        setNavbarPosition();

        $( window ).scroll( function () {
            setNavbarPosition();
        } );

        function setNavbarPosition() {
            currentTop = $( window ).scrollTop();

            if ( currentTop > HeaderTop ) {
                $( 'header' ).addClass( 'stiky' );

            } else {
                $( 'header' ).removeClass( 'stiky' );
            }

        }
    };

    stikyMenu();

    $(function() {
        $('.runningLine__content').marquee({
            duration: 20000,
            startVisible: true,
            duplicated: true
        });
    });



    // start animate numbers

    function onVisible( selector, callback, repeat = false ) {

        let options = {
            threshold: [ 0.5 ]
        };
        let observer = new IntersectionObserver( onEntry, options );
        let elements = document.querySelectorAll( selector );

        for ( let elm of elements ) {
            observer.observe( elm );
        }

        function onEntry( entry ) {
            entry.forEach( change => {
                let elem = change.target;
                // console.log(change);
                // console.log(elem.innerHTML);
                if ( change.isIntersecting ) {
                    if ( !elem.classList.contains( 'show' ) || repeat ) {
                        elem.classList.add( 'show' );
                        callback( elem );
                    }
                }
            } );
        }
    }

    onVisible( '.count_numbers_js', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    onVisible( '.count_numbers_big_js', function ( e ) {
        animateNumberBig( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 1500 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final >= start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    function animateNumberBig( elem, final, duration = 1500 ) {
        // let start = 0;
        let start = 44500;
        // console.log('init');
        setInterval( function () {
            if ( final >= start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    // end animate numbers


    function showMore() {
        let count = $('.projects__item').length,
        start = 4,
        show = 4;

        $('.projects__item').addClass('d-none');
        $('.projects__item:lt(' + start + ')').removeClass('d-none');

        $('.show_more_js').click(function(e) {
            e.preventDefault();
            $(this).addClass('loading');

            let load = $(this).data('load');
            let more = $(this).data('more');

            start = (start + show <= count) ? start + show : count;

            $(this).text(load);

            setTimeout(() => {


                $('.projects__item:lt(' + start + ')').removeClass('d-none');

                $(".twentytwenty-container").twentytwenty({
                    default_offset_pct: 0.42, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
                    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
                    before_label: 'До', // подпись 'до'
                    after_label: 'После', // подпись 'после'
                    no_overlay: true, // не показывать затемнение с надписями 'до' и 'после'
                    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
                    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
                    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
                });

                if ($('.projects__item:not(.d-none)').length == count) {
                    $(this).parent().remove();
                }

                $(this).removeClass('loading');


                $(this).text(more);
            }, 1500);


        });


    }
    showMore();

    function showMoreAdvantage() {
        $('.show_advantage_js').click(function(e) {
            e.preventDefault();
            $(this).addClass('loading');
            let load = $(this).data('load');
            $(this).text(load);

            setTimeout(() => {
                $('.advantage__item').addClass('d-block');
                $(this).removeClass('loading');
                $(this).parent().remove();

            }, 1500);


        });

    }
    showMoreAdvantage();

    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        // anchorPlacement: 'bottom-bottom',
        duration: 1000, // values from 0 to 3000, with step 50ms
        // offset: 20,
        once: true,
    });

    AOS.init({
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    });






})
