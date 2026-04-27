import '../scss/style.scss'
import Swiper from 'swiper'

const burger = document.querySelector('.sidebar__burger')
const sidebar = document.querySelector('.sidebar')

if (burger && sidebar) {
  burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open')
  })
}

if (window.innerWidth < 768) {
  new Swiper('.brands__slider', {
    slidesPerView: 1.25,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
