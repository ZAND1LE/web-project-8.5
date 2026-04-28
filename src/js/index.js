import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const burger = document.querySelector('.sidebar__burger')
const sidebar = document.querySelector('.sidebar')

if (burger && sidebar) {
  burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open')
  })
}

if (window.innerWidth < 768) {
  new Swiper('.brands__slider', {
    modules: [Pagination],
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.brands-pagination',
      clickable: true
    }
  })

  new Swiper('.equipment__slider', {
    modules: [Pagination],
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.equipment-pagination',
      clickable: true
    }
  })
  new Swiper('.service-price__slider', {
    modules: [Pagination],
    slidesPerView: 1.1,
    spaceBetween: 16,
    pagination: {
      el: '.price-pagination',
      clickable: true
    }
  })
}
