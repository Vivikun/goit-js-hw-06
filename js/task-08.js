const form = document.querySelector(".login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = form.elements;
  const formData = {};
  for (const element of formElements) {
    if (element.tagName === "INPUT") {
      formData[element.name] = element.value;
    }
  }
  if (!formData.email.trim() || !formData.password.trim()) {
    alert("Please fill in all the fields!");
    return;
  }
  form.reset();
});
