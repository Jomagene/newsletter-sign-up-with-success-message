function handleLoadingData() {
  const email = localStorage.getItem("userEmail") || "ash@loremcompany.com";
  document.getElementById("success-email").textContent = email;
  localStorage.removeItem("userEmail");
}

document.addEventListener("DOMContentLoaded", handleLoadingData);
