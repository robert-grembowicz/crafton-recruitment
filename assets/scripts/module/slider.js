export default class slider {
  constructor(
    sliderClass,
    dots = true,
    arrows = true,
    appendArrows = sliderClass
  ) {
    this.sliderClass = sliderClass;
    this.dots = dots;
    this.arrows = arrows;
    this.appendArrows = appendArrows;
  }

  create() {
    const slider = document.querySelector(this.sliderClass);
    const slides = slider.children;
    [...slides].forEach((element) => {
      element.classList.add("slide");
    });

    slides[0].classList.add("slide--active");

    if (this.dots && slides.length > 1) {
      this.createDots(slides, slider);
      this.dotClick(slides);
    }

    if (this.arrows) {
      this.createArrows();
      this.arrowClick(slides);
    }
  }

  createDots(slides, slider) {
    const fragment = document.createDocumentFragment();
    const dots = document.createElement("div");
    dots.classList.add("slider__dots");
    fragment.appendChild(dots);

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("span");
      i == 0 ? dot.classList.add("slider__dot--active") : null;
      dot.classList.add("slider__dot");
      dots.appendChild(dot);
    }
    slider.parentNode.appendChild(fragment);
  }

  dotClick(slides) {
    const dots = document.querySelectorAll(".slider__dot");
    [...dots].map((dot, i) => {
      dot.addEventListener("click", (e) => {
        [...slides].map((elem) => {
          elem.classList.remove("slide--active");
        });
        slides[i].classList.add("slide--active");
        [...dots].map((dot) => {
          dot.classList.remove("slider__dot--active");
        });
        e.target.classList.add("slider__dot--active");
      });
    });
  }

  createArrows() {
    const arrows = document.createElement("div");
    arrows.classList.add("slider__arrows");

    const arrowLeft = document.createElement("span");
    arrowLeft.classList.add("slider__arrow", "slider__arrow--left");

    const arrowRight = document.createElement("span");
    arrowRight.classList.add("slider__arrow", "slider__arrow--right");

    arrows.appendChild(arrowLeft);
    arrows.appendChild(arrowRight);

    document.querySelector(this.appendArrows).appendChild(arrows);
  }

  arrowClick(slides) {
    const arrowRight = document.querySelector(".slider__arrow--right");
    const arrowLeft = document.querySelector(".slider__arrow--left");

    const changeSlide = (action) => {
      let count = null;
      [...slides].forEach((slide, i) => {
        if (slide.classList.contains("slide--active")) {
          slide.classList.remove("slide--active");
          if (action == "plus") {
            slides.length <= i + 1 ? (count = 0) : (count = i + 1);
          }
          if (action == "minus") {
            i == 0 ? (count = slides.length - 1) : (count = i - 1);
          }
        }
      });
      slides[count].classList.add("slide--active");
    };

    arrowRight.addEventListener("click", () => {
      changeSlide("plus");
    });

    arrowLeft.addEventListener("click", () => {
      changeSlide("minus");
    });
  }
}
