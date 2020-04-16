export default class popup {
  constructor(source, width = 640, height = 480) {
    this.source = source;
    this.width = width;
    this.height = height;
  }

  create() {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const popupWindow = document.createElement("div");
    popupWindow.classList.add("popup__window");

    const popupVideo = document.createElement("iframe");
    popupVideo.setAttribute("width", this.width);
    popupVideo.setAttribute("height", this.height);
    popupVideo.setAttribute("src", this.source);

    popupWindow.appendChild(popupVideo);
    popup.appendChild(popupWindow);

    this.close(popup, popupWindow);
    this.append(popup);
  }

  append(popup) {
    const body = document.querySelector("body");
    body.appendChild(popup);
  }

  close(removeElement, appendElement) {
    const closeButton = document.createElement("div");
    closeButton.classList.add("popup__close");

    closeButton.addEventListener("click", () => {
      const elem = document.querySelector(`.${removeElement.className}`);
      elem.parentNode.removeChild(elem);
    });

    appendElement.appendChild(closeButton);
  }
}
