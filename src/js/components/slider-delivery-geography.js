import { Splide } from "@splidejs/splide";

window.addEventListener("DOMContentLoaded", () => {
  const deliverySlider = document.querySelector("#delivery-geography-slider");

  if (deliverySlider) {
    const splideDelivery = new Splide(deliverySlider, {
      type: "loop",
      perPage: 4,
      perMove: 1,
      arrows: true,
      pagination: false,

      breakpoints: {
        768: {
          perPage: 3,
        },

        600: {
          perPage: 2,
        }, 

        415: {
          perPage: 1,
        }
      }
    });

    splideDelivery.mount();
  }
});
