// import Swiper from 'swiper';
// import 'swiper/css';

// import { register } from 'swiper/element/bundle';

// register();

// const swiper = new Swiper('.swiper', {
//   // // Optional parameters
//   // direction: 'vertical',
//   // loop: true,

//   // // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // // Navigation arrows
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },

//   // // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });

// const gra = function(min, max) {
//     return Math.random() * (max - min) + min;
// }

// const gri = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const init = function() {
//   let items = document.querySelectorAll('.tariffs-mobile .tariff');
//   for (let i = 0; i < items.length; i++) {
//     items[i].style.minWidth = gra(30,60) + 'vw';
//     items[i].style.background = randomColor({luminosity: 'light'});
//   }
//   cssScrollSnapPolyfill()
// }

// init();

document.addEventListener("DOMContentLoaded", function() {
    const tariffsMobile = document.querySelector('.tariffs-mobile');
    const secondTariff = tariffsMobile.querySelector('.tariff:nth-child(2)');
    secondTariff.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  });

  