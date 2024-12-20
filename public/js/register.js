const form = document.querySelector("form"),
    nField = form.querySelector(".name"),
    nInput = nField.querySelector("input"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input"),
    cField = form.querySelector(".confirm-password"),
    cInput = cField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault(); // Preventing form submission

  (nInput.value === "") ? nField.classList.add("shake", "error") : checkName();
  (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value === "") ? pField.classList.add("shake", "error") : checkPassword();
  (cInput.value === "") ? cField.classList.add("shake", "error") : checkConfirmPassword();

  setTimeout(() => {
    nField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cField.classList.remove("shake");
  }, 500);

  nInput.onkeyup = () => { checkName(); };
  eInput.onkeyup = () => { checkEmail(); };
  pInput.onkeyup = () => { checkPassword(); };
  cInput.onkeyup = () => { checkConfirmPassword(); };

  function checkName() {
    if (nInput.value.trim() === "") { // Check if the name is blank
      nField.classList.add("error");
      nField.classList.remove("valid");
      const errorTxt = nField.querySelector(".error-txt");
      errorTxt.innerText = "Name can't be blank";
    } else { // If valid, remove error and add valid class
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }

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
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!pInput.value.match(pattern)) {
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkConfirmPassword() {
    if (cInput.value !== pInput.value || cInput.value === "") {
      cField.classList.add("error");
      cField.classList.remove("valid");
    } else {
      cField.classList.remove("error");
      cField.classList.add("valid");
    }
  }

  if (!eField.classList.contains("error") && !pField.classList.contains("error") && !cField.classList.contains("error")) {
    alert("Form submitted successfully!");
  }
};

const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");

// Show password when the cursor is inside the input box
passwordField.addEventListener("focus", () => {
    passwordField.type = "text";
});

// Hide password when the cursor leaves the input box
passwordField.addEventListener("blur", () => {
    passwordField.type = "password";
});

// Show confirm password when the cursor is inside the input box
confirmPasswordField.addEventListener("focus", () => {
    confirmPasswordField.type = "text";
});

// Hide confirm password when the cursor leaves the input box
confirmPasswordField.addEventListener("blur", () => {
    confirmPasswordField.type = "password";
});


