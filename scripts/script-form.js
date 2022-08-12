let formElement = document.getElementById("form");

const getFormData = (ev) => {
  ev.preventDefault(); // deshabilita el comportamiento por defecto de submit

  let formData = new FormData(formElement);

  for (let data of formData) {
    console.log(data[0] + ": " + data[1]);
  }
};

formElement.addEventListener("submit", getFormData);
