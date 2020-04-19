export default function (func) {
  const youtube = document.querySelectorAll(".js-yt-film");

  [...youtube].forEach((elem) => {
    const link = elem.dataset.film;
    elem.addEventListener("click", () => {
      func(link);
    });
  });
}
