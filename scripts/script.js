let Myform = document.getElementById("my-form");

function handleFormSubmit(event) {
  event.preventDefault();
  location.href = "success.html";
}
Myform.addEventListener("submit", handleFormSubmit);
