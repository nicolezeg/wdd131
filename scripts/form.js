
const products = [
    {
      id: "fc-1888",
      name: "Flux capacitor",
      stars: 4.5
    },
    {
      id: "fc-2050",
      name: "Power laces",
      stars: 4.7
    },
    {
      id: "fs-1987",
      name: "Time circuits",
      stars: 3.5
    },
    {
      id: "ac-200",
      name: "Low voltage reactor",
      stars: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp equalizer",
      stars: 5.0
    }
  ];

const selectElement = document.getElementById('product-select');

products.forEach((product) => {
  const option = document.createElement('option');
  option.value = product.id;
  option.text = product.name;
  selectElement.appendChild(option);
});

/*---------review counter---------*/

var reviewCounter = localStorage.getItem('reviewCounter');

    // If the counter doesn't exist, set it to 0
    if (reviewCounter === null) {
      reviewCounter = 0;
    }

    // Increment the counter every time the page is loaded
    reviewCounter++;

    // Store the updated counter in localStorage
    localStorage.setItem('reviewCounter', reviewCounter);

    // Display the counter value
    document.getElementById('reviewCounter').innerHTML = 'You have completed ' + reviewCounter + 'reviews.';
