const myForm = document.getElementById("my-form");
let formInput = document.querySelector("input[name='myMail']");
let errorContainer = document.getElementById("error");
let email = "";

function validateEmail() {
  email = new FormData(myForm).get("myMail");
  if (!email) return "Enter a non empty email";

  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/;
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
  } else {
    localStorage.setItem("userEmail", email);
    location.href = "success.html";
  }
}
myForm.addEventListener("submit", handleFormSubmit);
