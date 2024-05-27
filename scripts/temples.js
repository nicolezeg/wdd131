
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified: " + lastModifiedDate;

const buttonMenu = document.querySelector("#menu");
const navbar = document.querySelector(".navigation");

buttonMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  buttonMenu.classList.toggle("open");
});
