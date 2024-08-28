function handleLoadingData() {
  const email = localStorage.getItem("userEmail");
  document.getElementById("success-email").textContent = email;
  localStorage.removeItem("userEmail");
}

document.addEventListener("DOMContentLoaded", handleLoadingData);
