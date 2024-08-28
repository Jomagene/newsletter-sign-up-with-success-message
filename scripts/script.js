const myForm = document.getElementById("my-form");
let formInput = document.querySelector("input[name='myMail']");
let labelInput = document.querySelector("input");
let errorContainer = document.getElementById("error");

function validateEmail() {
  const email = new FormData(myForm).get("myMail");
  console.log(email);
  if (!email) return "Valid Email required";

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "Please enter a valid email";
  }

  return "";
}

function handleFormSubmit(event) {
  event.preventDefault();

  const errorMessage = validateEmail();
  if (errorMessage) {
    formInput.classList.add("fail");
    errorContainer.textContent = errorMessage;
    errorContainer.classList.add("fail");
  } else location.href = "success.html";
}
myForm.addEventListener("submit", handleFormSubmit);
