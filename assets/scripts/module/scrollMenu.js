export default function () {
  const menu = document.querySelector(".js-menu");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
      menu.classList.add("header--scroll");
    } else {
      menu.classList.remove("header--scroll");
    }
  });
}
