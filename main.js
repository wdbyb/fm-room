import './style.css';
// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
