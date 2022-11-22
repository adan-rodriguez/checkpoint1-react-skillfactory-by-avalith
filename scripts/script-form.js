const form = document.getElementById("form");
const email = document.getElementById("email");
const emailErrorMessage = document.querySelector(".email-error-message");
const nameInput = document.getElementById("name");
const nameErrorMessage = document.querySelector(".name-error-message");
const buttonSubmit = document.querySelector('button[type="submit"]');

const getFormData = (e) => {
  // con e.target no hace falta crear más referencias
  console.log("Name:", e.target.name.value);
  console.log("Email:", e.target.email.value);
  console.log("Comment:", e.target.comment.value);

  // let formData = new FormData(formElement);

  // for (let data of formData) {
  //   console.log(data[0] + ": " + data[1]);
  // }

  form.reset();
};

// -----------------------------------------------------------------------------------------------

// email.onblur = function () {
//   if (!email.value.includes("@")) {
//     // not email
//     email.classList.add("invalid");
//     error.innerHTML = "Por favor introduzca un correo válido.";
//   }
// };

// email.onfocus = function () {
//   if (this.classList.contains("invalid")) {
//     // quitar la  indicación "error", porque el usuario quiere reintroducir algo
//     this.classList.remove("invalid");
//     error.innerHTML = "";
//   }
// };

// -----------------------------------------------------------------------------------------------

// const inputEmail = document.getElementById("email");
// const messageErrorEmail = document.getElementById("message-error-email");

// const validateEmail = () => {
//   if (!inputEmail.value.includes("@")) {
//     inputEmail.classList.add("invalid");
//     messageErrorEmail.innerText = "Por favor introduzca un correo válido.";
//   }
// };

// const removeErrorValidateEmail = () => {
//   if (inputEmail.classList.contains("invalid")) {
//         inputEmail.classList.remove("invalid");
//         messageErrorEmail.innerText = "";
//       }
// }

// inputEmail.addEventListener("blur", validateEmail);
// inputEmail.addEventListener("focus", removeErrorValidateEmail);

// ------------------------------------------------------------------------------------------

// const email = document.getElementById("email");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// ---------------------------------------------------------------------------------------------

// nameInput.addEventListener("blur", () => {
//   if (!nameInput.validity.valid) {
//     nameErrorMessage.innerText = "Ingresa tu nombre.";
//     nameInput.style.borderColor = "red";
//   }
// });

// email.addEventListener("blur", () => {
//   if (!email.validity.valid) {
//     showEmailErrorMessage();
//     email.style.borderColor = "red";
//   }
// });

// nameInput.addEventListener("input", () => {
//   nameErrorMessage.innerText = "";
//   nameInput.style.borderColor = "";
//   if (email.validity.valid && nameInput.validity.valid) {
//     buttonSubmit.removeAttribute("disabled");
//     buttonSubmit.classList.add("submit-button");
//   } else {
//     buttonSubmit.setAttribute("disabled", "true");
//     buttonSubmit.classList.remove("submit-button");
//   }
// });

// email.addEventListener("input", () => {
//   emailErrorMessage.innerText = "";
//   email.style.borderColor = "";
//   if (email.validity.valid && nameInput.validity.valid) {
//     buttonSubmit.removeAttribute("disabled");
//     buttonSubmit.classList.add("submit-button");
//   } else {
//     buttonSubmit.setAttribute("disabled", "true");
//     buttonSubmit.classList.remove("submit-button");
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getFormData(e);
// });

// const showEmailErrorMessage = () => {
//   if (email.validity.valueMissing) {
//     emailErrorMessage.innerText = "Ingresa tu email.";
//   } else if (email.validity.typeMismatch) {
//     emailErrorMessage.innerText = "Ingresa un email válido.";
//   }
// };

// ------------------------------------------------------------------------------------------------

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

nameInput.addEventListener("blur", () => {
  if (nameInput.value.length === 0) {
    nameErrorMessage.innerText = "Ingresa tu nombre.";
    nameInput.style.borderColor = "red";
  }
});

email.addEventListener("blur", () => {
  if (email.value.length === 0 || !emailRegExp.test(email.value)) {
    showEmailErrorMessage();
    email.style.borderColor = "red";
  }
});

const handleDisabledSubmitButton = () => {
  if (
    nameInput.value.length === 0 ||
    email.value.length === 0 ||
    !emailRegExp.test(email.value)
  ) {
    buttonSubmit.setAttribute("disabled", "true");
    buttonSubmit.classList.remove("submit-button");
  } else {
    buttonSubmit.removeAttribute("disabled");
    buttonSubmit.classList.add("submit-button");
  }
};

nameInput.addEventListener("input", () => {
  nameErrorMessage.innerText = "";
  nameInput.style.borderColor = "";
  handleDisabledSubmitButton();
});

email.addEventListener("input", () => {
  emailErrorMessage.innerText = "";
  email.style.borderColor = "";
  handleDisabledSubmitButton();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getFormData(e);
});

const showEmailErrorMessage = () => {
  if (email.value.length === 0) {
    emailErrorMessage.innerText = "Ingresa tu email.";
  } else if (!emailRegExp.test(email.value)) {
    emailErrorMessage.innerText = "Ingresa un email válido.";
  }
};
