import 'swiper/css';
import './style.css';
import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});
