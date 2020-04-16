import popup from "./module/popup";
import youtube from "./module/youtube";

youtube((link) => {
  const mainPopup = new popup(link);
  mainPopup.create();
});
