const themeToggleElements = document.querySelectorAll(".theme-toggle");
const buttonLights = document.querySelectorAll(".theme-toggle-button-light");
const buttonDarks = document.querySelectorAll(".theme-toggle-button-dark");
const images = document.querySelectorAll("img");
const overlay = document.querySelector(".mobile-overlay");

function changeImagesHandler(key, prevKey) {
  images.forEach((img, index) => {
    images[index].style.opacity = 0;
    setTimeout(() => {
      images[index].src = img.src.replace(`_${key}`, `_${prevKey}`);
      images[index].style.opacity = 1;
    }, 250);
  });
}

function buttonAnimationHAndler(key, prevKey) {
  const gradientValue = {
    dark: "linear-gradient(155deg, #ed8754 40%, rgb(226, 222, 219) 120%)",
    light: "linear-gradient(155deg, #753f26 60%, rgb(67, 37, 37))",
  };
  const buttonValue = { light: 0, dark: 96 };
  const backgroundValue = { light: "#1e1e1e", dark: "#e0e0e0" };
  const colorValue = { light: "#f1f1f1", dark: "#151515" };
  const colorValueAlter = { light: "#151515", dark: "#f1f1f1" };

  changeImagesHandler(key, prevKey);
  themeToggleElements.forEach((toggle, index) => {
    themeToggleElements[index].style.setProperty(
      "--translate-theme",
      `${buttonValue[key]}%`
    );
  });
  document.documentElement.style.setProperty(
    "--background-color-primary",
    backgroundValue[key]
  );
  document.documentElement.style.setProperty(
    "--primary-color-first",
    colorValue[key]
  );
  document.documentElement.style.setProperty(
    "--primary-color-second",
    colorValue[key]
  );
  const slides = document.querySelectorAll(".questions-slide");
  slides.forEach((slide, index) => {
    slides[index].style.setProperty(
      "--primary-color-second",
      colorValueAlter[key]
    );
  });
  overlay.style.setProperty("--linear-gradient", gradientValue[key]);
}

buttonLights.forEach((button, index) => {
  buttonLights[index].addEventListener("click", () =>
    buttonAnimationHAndler("light", "dark")
  );
  buttonDarks[index].addEventListener("click", () =>
    buttonAnimationHAndler("dark", "light")
  );
});
