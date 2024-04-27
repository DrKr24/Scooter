const slider = document.querySelector(".questions-slider");
const slides = document.querySelectorAll(".questions-slide");
const buttonPrev = document.querySelector(
  ".questions-actions-slider-button-prev"
);
const buttonNext = document.querySelector(
  ".questions-actions-slider-button-next"
);

window.addEventListener("resize", (event) => {
  const windowWidth = event.target.screen.width;
  if (windowWidth === 1160) {
    swiper.slidesPerViewDynamic(2);
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "swiper-pagination-bullet-active",
    clickable: true,
  },
});

buttonPrev.addEventListener("click", () => swiper.slidePrev());
buttonNext.addEventListener("click", () => swiper.slideNext());
