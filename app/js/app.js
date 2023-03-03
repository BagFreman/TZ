document.addEventListener('DOMContentLoaded', () => {

     // Button Show

     let btnDemo = document.querySelector('.main-btn .btn');
     let mainBtn = document.querySelector('.main-btn');
     let blockSlider = document.querySelector('.slider');

     function addClassShow() {
          mainBtn.classList.add('d-none');
          blockSlider.classList.add('slider__active');
     }

     btnDemo.onclick = function () {
          setTimeout(addClassShow, 5000);
     }

     // Swiper

     let paginationItem = [
          {
               img: 'img/prev/slider_1pre.jpg',
               title: 'Акция действует с ',
               date: '01.07.18',
               desc: 'Этот текст добавлен для демонстрации на странице'
          },
          {
               img: 'img/prev/slider_2pre.jpg',
               title: 'Акция действует с ',
               date: '01.07.18',
               desc: 'Этот текст добавлен для демонстрации на странице'
          },
          {
               img: 'img/prev/slider_3pre.jpg',
               title: 'Акция действует с ',
               date: '01.07.18',
               desc: 'Этот текст добавлен для демонстрации на странице'
          },
          {
               img: 'img/prev/slider_4pre.jpg',
               title: 'Акция действует с ',
               date: '01.07.18',
               desc: 'Этот текст добавлен для демонстрации на странице'
          }
     ]


     const swiper = new Swiper('.swiper', {
          speed: 400,
          spaceBetween: 20,
          navigation: {
               nextEl: '.slider-navs__nav-next',
               prevEl: '.slider-navs__nav-prev',
          },

          breakpoints: {
               0: {
                    pagination: {
                         el: '.slider-pagination-mobile',
                         bulletActiveClass: 'swiper-pagination-bullet-active',
                         clickable: true,
                    }
               },

               768: {
                    pagination: {
                         el: '.swiper-pagination',
                         clickable: true,
                         bulletActiveClass: 'slider-pagination__item-active',
                         renderBullet: function (index, className) {
                              return '<div class="slider-pagination__item ' + className + '"> \
                              <div class="slider-pagination__thumbnail"> \
                              <img class="slider-pagination__img" src="' + paginationItem[index].img + '" alt=""></div> \
                              <div class="slider-pagination__content"> \
                              <div class="slider-pagination__title"> \
                              '+ paginationItem[index].title + ' <date>' + paginationItem[index].date + '</date> \
                              </div> \
                              <p class="slider-pagination__desc"> \
                                   '+ paginationItem[index].desc + '   \
                              </p> \
                              </div></div></div>';
                         },

                    },
               }
          }


     });

})