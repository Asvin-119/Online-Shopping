const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault(); // Preventing form submission

  (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value === "") ? pField.classList.add("shake", "error") : checkPassword();

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => { checkEmail(); };
  pInput.onkeyup = () => { checkPassword(); };

  function checkEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const errorTxt = eField.querySelector(".error-txt");
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      eField.classList.remove("valid");
      errorTxt.innerText = eInput.value !== "" ? "Enter a valid email address" : "Email can't be blank";
    } else {
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPassword() {
    if (pInput.value === "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    alert("Form submitted successfully!");
  }
};
