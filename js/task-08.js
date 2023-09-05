const form = document.querySelector(".login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = [...form.elements];
  const formData = formElements.reduce((data, element) => {
    if (element.tagName === "INPUT") {
      data[element.name] = element.value;
    }
    return data;
  }, {});

  if (
    !formData.email ||
    !formData.password ||
    !formData.email.trim() ||
    !formData.password.trim()
  ) {
    alert("Please fill in all the fields!");
  } else {
    console.log(formData);
    form.reset();
  }
});
