const btn = document.querySelector('[data-burger="btn"]')
const menu = document.querySelector('[data-burger="menu"]')
const body = document.body

const openMenu = () => {
  btn.classList.toggle('burger--active')
  menu.classList.toggle('nav--active')
  body.classList.toggle('body--fixed')
}

const closeMenu = () => {
  btn.classList.remove('burger--active')
  menu.classList.remove('nav--active')
  body.classList.remove('body--fixed')
}

menu.addEventListener('click', event => {
  if (event.target && event.target.classList.contains('nav__link')) {
    closeMenu()
  }
})

btn.addEventListener('click', openMenu)
