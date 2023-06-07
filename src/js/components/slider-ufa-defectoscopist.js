import { Splide } from "@splidejs/splide";


window.addEventListener("DOMContentLoaded", () => {

  const mainDefectoscopist = document.querySelector('#splide-main-defectoscopist');
  const navDefectoscopist = document.querySelector('#splide-navigation-defectoscopist');

  if (mainDefectoscopist && navDefectoscopist) {
    
  const splideMainDefectoscopist = new Splide(mainDefectoscopist, {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  const splideNavDefectoscopist = new Splide(navDefectoscopist, {
    gap: 10,
    fixedWidth: 154,
    fixedHeight: 99,
    rewind: true,
    pagination: false,
    perPage: 2,
    isNavigation: true,
  });

  splideMainDefectoscopist.sync(splideNavDefectoscopist);
  splideMainDefectoscopist.mount();
  splideNavDefectoscopist.mount();
  }
});
