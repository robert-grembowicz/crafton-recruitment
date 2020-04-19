import popup from "./module/popup";
import youtube from "./functions/youtube";
import scrollMenu from "./functions/scrollMenu";
import slider from "./module/slider";
import validation from "./module/validation";
import toggleMobileMenu from "./functions/toggleMobileMenu";

scrollMenu();
toggleMobileMenu();

const mainSlider = new slider(".js-slider", true, true, ".slider__text");
mainSlider.create();

youtube((link) => {
  const mainPopup = new popup(link);
  mainPopup.create();
});

validation();
