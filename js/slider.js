$(document).ready(function() {


    // const comments = new Swiper('.comments-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.comments__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-drop_right',
    //         prevEl: '.icon-drop_left',
    //     },
    //     spaceBetween: 10,
    // });

    const certificate = new Swiper('.certificate-swiper-js', {
        slidesPerView: 2,
        speed: 500,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.certificate__dotted',
            clickable: true,
        },

        spaceBetween: 10,

        breakpoints: {
            768: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
            pagination: {
                 el: '.certificate__dotted',
            },


        }
    });

    // const youtube = new Swiper('.youtubeBox-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.youtubeBox__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 10,
    // });

    // const blog = new Swiper('.blog-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     pagination: {
    //         el: '.blog__dotted',
    //     },
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 38,
    //             slidesPerView: 2,
    //         },
    //     }
    // });

    // const logoSlider = new Swiper('.logoSlider-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     grabCursor: true,
    //     pagination: {
    //         el: '.logoSlider__doted',
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 4,
    //         },
    //     }
    // });

    // const teamSlider = new Swiper('.team-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //     pagination: {
    //         el: '.team__dotted',
    //     },
    //     dynamicBullets: true,
    //     navigation: {
    //         nextEl: '.icon-arrow_long_right',
    //         prevEl: '.icon-arrow_long_left',
    //     },
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 34,
    //         },
    //     }
    // });

    // function mobilSlider () {
    //     let slider_services = null;
    //     let slider_conditions = null;
    //     let mediaQuerySize = 767;
    //
    //     function initSlider () {
    //         if (!slider_services) {
    //             slider_services = new Swiper('.services-swiper-js', {
    //
    //                 pagination: {
    //                     el: '.services__dotted',
    //                 },
    //
    //                 slidesPerView: 1,
    //                 spaceBetween: 22,
    //
    //                 observer: true,
    //                 observeParents: true,
    //                 observeSlideChildren: true,
    //             });
    //         }
    //
    //         if (!slider_conditions) {
    //             slider_conditions = new Swiper('.conditions-swiper-js', {
    //
    //                 pagination: {
    //                     el: '.conditions__dotted',
    //                 },
    //
    //                 slidesPerView: 1,
    //                 spaceBetween: 22,
    //
    //                 observer: true,
    //                 observeParents: true,
    //                 observeSlideChildren: true,
    //             });
    //         }
    //
    //     }
    //
    //     function destroySlider () {
    //         if (slider_services) {
    //             slider_services.destroy();
    //             slider_services = null;
    //         }
    //
    //         if (slider_conditions) {
    //             slider_conditions.destroy();
    //             slider_conditions = null;
    //         }
    //     }
    //
    //     $(window).on('load resize', function () {
    //         let windowWidth = $(this).innerWidth();
    //         if (windowWidth <= mediaQuerySize) {
    //             initSlider();
    //             // console.log('init');
    //         } else {
    //             destroySlider();
    //             // console.log('destroy');
    //         }
    //     });
    // }
    // mobilSlider();


    // const steps = new Swiper('.steps-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.steps__dotted',
    //     },
    //     dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 0,
    //             navigation: {
    //                 nextEl: '.icon-arrow_long_right',
    //                 prevEl: '.icon-arrow_long_left',
    //             },
    //         },
    //     }
    // });

    // const tariffs = new Swiper('.tariffs-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     initialSlide: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.tariffs__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 4,
    //             spaceBetween: 30,
    //             // navigation: {
    //             //     nextEl: '.icon-arrow_long_right',
    //             //     prevEl: '.icon-arrow_long_left',
    //             // },
    //         },
    //     }
    // });

    // const moreServices = new Swiper('.moreServices-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.moreServices__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 5,
    //             spaceBetween: 16,
    //             // navigation: {
    //             //     nextEl: '.icon-arrow_long_right',
    //             //     prevEl: '.icon-arrow_long_left',
    //             // },
    //         },
    //     }
    // });

    // const payment = new Swiper('.payment-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.payment__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 84,
    //             // navigation: {
    //             //     nextEl: '.icon-arrow_long_right',
    //             //     prevEl: '.icon-arrow_long_left',
    //             // },
    //         },
    //     }
    // });

    // const more = new Swiper('.more-swiper-js', {
    //     // loop: true,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     pagination: {
    //         el: '.more__dotted',
    //     },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 0,
    //             autoHeight: false,
    //
    //         },
    //     }
    // });

    // const gallery = new Swiper('.gallery-swiper-js', {
    //     loop: true,
    //     slidesPerView: 1,
    //     // autoHeight: true,
    //     speed: 500,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     // grabCursor: true,
    //     // pagination: {
    //     //     el: '.more__dotted',
    //     // },
    //     // dynamicBullets: true,
    //
    //     spaceBetween: 22,
    //     navigation: {
    //         nextEl: '.icon-arrow_right',
    //         prevEl: '.icon-arrow_left',
    //     },
    //     // breakpoints: {
    //     //     768: {
    //     //         slidesPerView: 3,
    //     //         spaceBetween: 0,
    //     //         autoHeight: false,
    //     //
    //     //     },
    //     // }
    // });

});

// jQuery(function($){
//   let windowWidth = $(window).width();
//   let windowHeight = $(window).height();
//
//   $(window).resize(function() {
//     if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
//       location.reload();
//       return;
//     }
//   });
// });
