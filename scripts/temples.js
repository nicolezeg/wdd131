
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified: " + lastModifiedDate;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});