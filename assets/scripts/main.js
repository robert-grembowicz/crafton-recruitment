import popup from "./module/popup";
import youtube from "./module/youtube";
import scrollMenu from "./module/scrollMenu";

scrollMenu();

youtube((link) => {
  const mainPopup = new popup(link);
  mainPopup.create();
});
