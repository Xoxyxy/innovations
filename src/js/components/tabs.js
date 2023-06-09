const tabs = document.querySelector('.product-page__tabs')

if (tabs) {
  const tabsBtn = document.querySelectorAll('.product-page__tabs-btn')
  const tabsContents = document.querySelectorAll('.product-page__tabs-content')

  tabs.addEventListener('click', (event) => {
    const { target } = event

    if (target && target.classList.contains('product-page__tabs-btn')) {
      tabsHandler(target.dataset.tabsPath)
      target.classList.add('product-page__tabs-btn--active')
    }
  })

  const tabsHandler = (path) => {
    tabsBtn.forEach((btn) => {
      btn.classList.remove('product-page__tabs-btn--active')
    })

    tabsContents.forEach((content) => {
      content.classList.remove('product-page__tabs-content--active')
    })
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('product-page__tabs-content--active')
  }
}
