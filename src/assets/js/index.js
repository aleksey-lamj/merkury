import '../scss/main.scss'

// Для отображения svg sprite в ie
import '../../../node_modules/svgxuse/svgxuse';

import $ from 'jquery'

$(function () {

    $('a').on('click', (e) => {
        e.preventDefault()
    })
    
    const heightDropWindow = $('.handle-img').height()
    $('.completed-drop').css({'height': heightDropWindow + 'px', 'lineHeight': heightDropWindow + 'px'})

    $(window).scroll(function () {
        let wScroll = $(this).scrollTop()

        if (wScroll + 500 > $('.tasks-wrap').offset().top && !$('.tasks-wrap').hasClass('watching')) {
            $('.tasks-wrap').addClass('watching')
            $('.task').each(function (i, el) {
                setTimeout(() => {
                    $(el).addClass('visible')
                }, 400 * i);
            })
        }
        if (wScroll + 700 < $('.tasks-wrap').offset().top && $('.tasks-wrap').hasClass('watching')) {
            $('.tasks-wrap').removeClass('watching')
            $('.task').removeClass('visible')
        }


        if (wScroll + 500 > $('.all-browser').offset().top && !$('.all-browser').hasClass('watching')) {
            $('.all-browser').addClass('watching')
            $('.all-browser .txt-wrap').children().each(function (i, el) {
                setTimeout(() => {
                    $(el).addClass('visible')
                }, 400 * i);
            })
            setTimeout(() => {
                $('.all-browser .img-wrap').addClass('img-move')
            }, 1500);
        }
        if (wScroll + 1200 < $('.all-browser').offset().top && $('.all-browser').hasClass('watching')) {
            $('.all-browser').removeClass('watching')
            $('.all-browser .txt-wrap').children().removeClass('visible')
            $('.all-browser .img-wrap').removeClass('img-move')
        }


        if (wScroll + 500 > $('.powerfull-psd').offset().top && !$('.powerfull-psd').hasClass('watching')) {
            $('.powerfull-psd').addClass('watching')
            $('.mockup-txt').each((i, el) => {
                setTimeout(() => {
                    $(el).addClass('visible')
                    setTimeout(() => {
                        this.document.querySelectorAll('.mockup-txt__title')[i].classList.add('move-line')
                    }, 200);
                    setTimeout(() => {
                        this.document.querySelectorAll('.mockup-txt h4')[i].classList.add('move-circle')

                    }, 600);
                }, 1500 * i);
            });
            $('.mockup-wrap img').addClass('move-img')
        }
        if (wScroll + 700 < $('.powerfull-psd').offset().top && $('.powerfull-psd').hasClass('watching')) {
            $('.powerfull-psd').removeClass('watching')
            $('.mockup-txt').removeClass('visible')
            $('.mockup-txt__title').removeClass('move-line')
            $('.mockup-txt h4').removeClass('move-circle')
            $('.mockup-wrap img').removeClass('move-img')
        }


        if (wScroll + 500 > $('.pricing').offset().top && !$('.pricing').hasClass('watching')) {
            $('.pricing').addClass('watching')
            $('.cart').each((i, el) => {
                setTimeout(() => {
                    $(el).addClass('visible')
                }, 400 * i);
            })
        }
        if (wScroll + 700 < $('.pricing').offset().top && $('.pricing').hasClass('watching')) {
            $('.pricing').removeClass('watching')
            $('.cart').removeClass('visible')
        }
    });

})