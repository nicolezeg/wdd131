
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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, United States",
    dedicated: "Renovation",
    area: 128325,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-utah-temple-spring-1160282-wallpaper.jpg"
  },
  {
    templeName: "Meridian Idaho",
    location: "Meridian, Idaho, United States",
    dedicated: "2017, November, 19",
    area: 67331,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/meridian-idaho/400x250/meridian-idaho-1962615.jpg"
  },
  {
    templeName: "Idaho Falls",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 92177,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
  },
];

function filterTemples(criteria) {
  switch (criteria) {
      case 'Old':
          return temples.filter(temple => temple.dedicated.startsWith('18'));
      case 'New':
          return temples.filter(temple => temple.dedicated.startsWith('20'));
      case 'Large':
          return temples.filter(temple => temple.area > 90000);
      case 'Small':
          return temples.filter(temple => temple.area < 10000);
      default:
          return temples;
  }
}

function displayTemples(filteredTemples) {
  const templeContainer = document.getElementById('temple-container');
  templeContainer.innerHTML = '';

  filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');
  
      templeCard.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          `;
      templeContainer.appendChild(templeCard);
  });
}

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const criteria = this.getAttribute('title');
      const filteredTemples = filterTemples(criteria);
      displayTemples(filteredTemples);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const defaultFilteredTemples = filterTemples('Home');
  displayTemples(defaultFilteredTemples);
});
