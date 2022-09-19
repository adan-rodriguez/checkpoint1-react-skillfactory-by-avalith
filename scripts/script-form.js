let formElement = document.getElementById("form");

const getFormData = (e) => {
  e.preventDefault();

  let formData = new FormData(formElement);

  for (let data of formData) {
    console.log(data[0] + ": " + data[1]);
  }

  formElement.reset();
};

formElement.addEventListener("submit", getFormData);
