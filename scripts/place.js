const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified: " + lastModifiedDate;

// Define static values for temperature and wind speed
const temperature = 7; // in °C
const windSpeed = 3; // in km/h

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10 && windSpeed > 4.8) ? Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : "N/A";
}

// Display windchill factor in the "Weather" section of the page
document.getElementById("weather").innerText = `Windchill Factor: ${calculateWindChill(temperature, windSpeed)}`;
