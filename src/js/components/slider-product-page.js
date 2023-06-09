import { Splide } from "@splidejs/splide";

window.addEventListener("DOMContentLoaded", () => {

  const mainProduct = document.querySelector('#splide-main-product-page');
  const navProduct = document.querySelector('#splide-navigation-product-page');

  if (mainProduct && navProduct) {
    const splideMainProduct = new Splide(mainProduct, {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });
  
    const splideNavProduct = new Splide(navProduct, {
      gap: 10,
      fixedWidth: 86,
      fixedHeight: 86,
      rewind: true,
      pagination: false,
      perPage: 2,
      isNavigation: true,
    });
  
    splideMainProduct.sync(splideNavProduct);
    splideMainProduct.mount();
    splideNavProduct.mount();
  }
})