export default class popup {
  constructor(source, width = 640, height = 480, text) {
    this.source = source;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  create() {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const popupWindow = document.createElement("div");
    popupWindow.classList.add("popup__window");

    let popupSource = null;

    if (this.source) {
      popupSource = document.createElement("iframe");
      popupSource.setAttribute("src", this.source);
    }

    if (this.text) {
      popupSource = document.createElement("p");
      popupSource.innerHTML = this.text;
    }
    popupSource.style.width = `${this.width}px`;
    popupSource.style.height = `${this.height}px`;

    popupSource.setAttribute("width", this.width);
    popupSource.setAttribute("height", this.height);

    popupWindow.appendChild(popupSource);
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
