const myForm = document.getElementById("my-form");
let formInput = document.querySelector("input[name='myMail']");
let errorContainer = document.getElementById("error");

function validateEmail() {
  const email = new FormData(myForm).get("myMail");
  console.log(email);
  if (!email) return "Enter a non empty email";

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "Valid Email required";
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
