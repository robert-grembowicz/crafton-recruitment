export default function () {
  const menu = document.querySelector(".js-toggle-menu");
  const mobileMenu = document.querySelector(".header__mobile-hld");

  menu.addEventListener("click", () => {
    menu.classList.toggle("hamburger--active");
    mobileMenu.classList.toggle("active");
  });
}
