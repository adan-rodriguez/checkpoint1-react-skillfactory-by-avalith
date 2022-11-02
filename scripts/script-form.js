let formElement = document.getElementById("form");

const getFormData = (e) => {
  e.preventDefault();

  console.log("Name:", e.target.name.value);
  console.log("Email:", e.target.email.value);
  console.log("Comment:", e.target.comment.value);

  // let formData = new FormData(formElement);

  // for (let data of formData) {
  //   console.log(data[0] + ": " + data[1]);
  // }

  // formElement.reset();
};

formElement.addEventListener("submit", getFormData);

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
