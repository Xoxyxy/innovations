import { Splide } from "@splidejs/splide";

window.addEventListener("DOMContentLoaded", () => {

  const mainLab = document.querySelector('#splide-main-laboratories');
  const navLab = document.querySelector('#splide-navigation-laboratories');

  if (mainLab && navLab) {
    const splideMainLab = new Splide(mainLab, {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });
  
    const splideNavLab = new Splide(navLab, {
      gap: 10,
      fixedWidth: 172,
      fixedHeight: 134,
      rewind: true,
      pagination: false,
      perPage: 2,
      isNavigation: true,
    });
  
    splideMainLab.sync(splideNavLab);
    splideMainLab.mount();
    splideNavLab.mount();
  }

  const mainDev = document.querySelector('#splide-main-develop');
  const navDev = document.querySelector('#splide-navigation-develop');

  if (mainDev && navDev) {
    const splideMainDev = new Splide("#splide-main-develop", {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });
  
    const splideNavDev = new Splide("#splide-navigation-develop", {
      gap: 10,
      fixedWidth: 172,
      fixedHeight: 134,
      rewind: true,
      pagination: false,
      perPage: 2,
      isNavigation: true,
    });
  
    splideMainDev.sync(splideNavDev);
    splideMainDev.mount();
    splideNavDev.mount();
  }

  const mainInnovator = document.querySelector('#splide-main-innovator');
  const navInnovator = document.querySelector('#splide-navigation-innovator');

  if (mainInnovator && navInnovator) {
    const splideMainInnovator = new Splide("#splide-main-innovator", {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });
  
    const splideNavInnovator = new Splide("#splide-navigation-innovator", {
      gap: 10,
      fixedWidth: 172,
      fixedHeight: 134,
      rewind: true,
      pagination: false,
      perPage: 2,
      isNavigation: true,
    });
  
    splideMainInnovator.sync(splideNavInnovator);
    splideMainInnovator.mount();
    splideNavInnovator.mount();
  }
});
