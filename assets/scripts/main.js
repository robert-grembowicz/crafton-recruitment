import popup from "./module/popup";
import youtube from "./module/youtube";
import scrollMenu from "./module/scrollMenu";
import slider from "./module/slider";

scrollMenu();

const mainSlider = new slider(".js-slider", true, true, ".slider__text");
mainSlider.create();

youtube((link) => {
  const mainPopup = new popup(link);
  mainPopup.create();
});
