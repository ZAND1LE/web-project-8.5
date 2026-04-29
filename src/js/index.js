import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const openBtn = document.querySelector('.main__menu-icon')

const closeBtn = document.querySelector('.sidebar__burger')

const sidebar = document.querySelector('.sidebar')

if (openBtn && sidebar) {
  openBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar--open')
  })
}

if (closeBtn && sidebar) {
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--open')
  })
}

const brandsToggle = document.querySelector('.brands__toggle')
const brandExtras = document.querySelectorAll('.brands__item--extra')

if (brandsToggle && brandExtras.length) {
  brandsToggle.addEventListener('click', () => {
    brandExtras.forEach((item) => {
      item.classList.toggle('brands__item--visible')
    })

    const text = brandsToggle.querySelector('span')

    text.textContent = text.textContent === 'Show all' ? 'Hide' : 'Show all'
  })
}

const equipmentToggle = document.querySelector('.equipment__toggle')
const equipmentExtras = document.querySelectorAll('.equipment--extra')

if (equipmentToggle && equipmentExtras.length) {
  equipmentToggle.addEventListener('click', () => {
    equipmentExtras.forEach((item) => {
      item.classList.toggle('equipment--visible')
    })

    const text = equipmentToggle.querySelector('span')

    text.textContent = text.textContent === 'Show all' ? 'Hide' : 'Show all'
  })
}

if (window.innerWidth < 768) {
  new Swiper('.brands__slider', {
    modules: [Pagination],
    slidesPerView: 1.25,
    spaceBetween: 16,
    pagination: {
      el: '.brands-pagination',
      clickable: true
    }
  })

  new Swiper('.equipment__slider', {
    modules: [Pagination],
    slidesPerView: 1.25,
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
