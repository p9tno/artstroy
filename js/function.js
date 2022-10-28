$(document).ready(function() {


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.navbar').toggleClass('navbar_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $('.nav_open_bg').toggleClass('nav_open_bg_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

    function activeNav() {
        $('.menu-item').on('click', function() {
            $('.menu-item').removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
        })
    };
    activeNav();

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
            wrap = body.closest('[data-collapse-wrapper]');

            if (!id) {
                // $('[data-collapse-wrapper]').removeClass('open');
                body = $(this).parent().find('[data-collapse-body]');
                $(this).toggleClass('open');
                if ($(this).hasClass('open')) {
                    body.slideDown();
                } else {
                    body.slideUp();
                }
            } else if (id === 'all') {
                body.slideDown();
                toggle.addClass('open');
            } else {
                body.slideToggle();
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

    $('.tabs-wrapper').each(function() {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function() {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });


    function doDrop() {
        $('.drop__toggle').on('click', function() {
            // $('.drop__list').toggleClass('open');
            $(this).toggleClass('active');
            $(this).closest('.drop').find('.drop__list').toggleClass('open');
        });
    };
    doDrop();



    // for select2
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

        let HeaderTop = $( '.header__bottom' ).offset().top;
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

    onVisible( '.programsInfo__number', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 1000 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final > start ) {
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


    gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".box", {
    //   scrollTrigger: {
    //     trigger: ".box",
    //     toggleActions: "restart pause reverse pause ", // play pause resume restart reverse complete reset none
    //     // toggleActions: "restart none reverse none", // play pause resume restart reverse complete reset none
    //     start: "top center", // px % top center bottom
    //     // start: "-100% 10%",
    //     // end: 'bottom center',
    //     // end: '+=300px',
    //     end: 'top 100px',
    //     scrub: true,
    //     pin: true,
    //     // pin: ".ghost",
    //     markers: true,
    //     toggleClass: "active",
    //     // id: 'my-id',
    //     // scroller: "#advantage",
    //   },
    //   // x: 1000,
    //   // duration: 5,
    //
    // });

    // ScrollTrigger.create({
    //     trigger: "#advantage",
    //     start: "top 20%",
    //     end: "bottom bottom",
    //     pin: ".advantage__caption",
    //      markers: true,
    // });

    // ScrollTrigger.greate({
    //     trigger: ".box",
    //     start: "top center",
    //     end: 'top 100px',
    //     toggleClass: "active",
    //     markers: true,
    // });



    // gsap.from(".advantage__list", {
    //     scrollTrigger: {
    //         trigger: ".advantage",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "top",
    //     ease: "none",
    //     markers: true,
    // });






    // ScrollTrigger.create({
    //     trigger: "#advantage",
    //     start: "top top",
    //     // endTrigger: "#otherID",
    //     end: "bottom 50%+=100px",
    //     markers: true,
    //     onToggle: self => console.log("toggled, isActive:", self.isActive),
    //     onUpdate: self => {
    //         console.log("progress:", self.progress.toFixed(2), "direction:", self.direction, "velocity", self.getVelocity());
    //     }
    // });






})

// const text = document.querySelectorAll('.advantage__list > *')
//
// const tl = gsap.timeline().to('.advantage__list', {width: 150, height: 150}).fromTo(text, {x: -100}, {x: 0, stagger: 0.3})
//
// ScrollTrigger.create({
// 	trigger: '.advantage',
// 	animation: tl,
// 	pin: true,
// 	start: 'top center',
// 	end: '+=1500 bottom',
// 	scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
// 	markers: true,
// })





// gsap.registerPlugin(ScrollTrigger);
//
// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
//   });
// });
//
//
// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });
