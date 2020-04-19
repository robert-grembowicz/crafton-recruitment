export default function () {
  let forms = document.querySelectorAll(".js-validate");

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const outline = (input, e) => {
    e.preventDefault();
    input.classList.add("warning");
  };

  const validation = (input, e) => {
    if (input.value.length <= 2 && input.type != "checkbox") {
      outline(input, e);
    } else {
      switch (input.name) {
        case "mail":
          validateEmail(input.value) == false ? outline(input, e) : null;
          break;
        case "agree":
          input.checked == false ? outline(input, e) : null;
          break;
      }
    }
  };

  [...forms].forEach((form) => {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input");
      const textareas = form.querySelectorAll("textarea");

      const allInputs = [...inputs, ...textareas];
      console.log(allInputs);
      allInputs.forEach((input) => {
        input.classList.remove("warning");
        validation(input, e);
      });
    });
  });
}
