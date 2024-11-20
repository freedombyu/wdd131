// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

    // Wind Chill Calculation
    const temperature = 15; // in Celsius
    const windSpeed = 8; // in km/h
    const windChillElement = document.getElementById("windChill");

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    } else {
        windChillElement.textContent = "N/A";
    }


// Calculate Wind Chill Factor
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}
