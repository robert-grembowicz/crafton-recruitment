export default function () {
  const menu = document.querySelector(".js-menu");
  const mobileMenu = document.querySelector(".js-mobile-menu");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
      menu.classList.add("header--scroll");
      mobileMenu.classList.add("scroll");
    } else {
      menu.classList.remove("header--scroll");
      mobileMenu.classList.remove("scroll");
    }
  });
}
