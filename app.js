// Hero Title of the page

const title = document.getElementById('title');
title.innerHTML = "Temperature Convertor 🔥";

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
}

// Function for Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9;
}

// Function for Celsius to Kelvin
const celsiusToKelvin = (celsius) => {
  return celsius + 273.15;
}

// Function for Fahrenheit to Kelvin
const fahrenheitToKelvin = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

// Function for Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
}

// Function for Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
  return (kelvin - 273.15) * 9/5 + 32;
}


document.querySelector('.submit').addEventListener('click', function (event) {
  event.preventDefault();

  // Getting Input Values
  const celsiusInput = document.getElementById('celsius').value;
  const fahrenheitInput = document.getElementById('fahrenheit').value;
  const kelvinInput = document.getElementById('kelvin').value;

  // Convert Based on the Inputs:
  if (celsiusInput !== '') {
    const celsius = parseFloat(celsiusInput); //parseFloat is used to accept the string and convert it into floating point number;
    document.getElementById('fahrenheit').value = celsiusToFahrenheit(celsius).toFixed(2); 
    document.getElementById('kelvin').value = celsiusToKelvin(celsius).toFixed(2);
  }

  if (fahrenheitInput !== '') {
    const fahrenheit = parseFloat(fahrenheitInput);

    document.getElementById('fahrenheit').value = fahrenheitToCelsius(fahrenheit).toFixed(2);
    document.getElementById('fahrenheit').value = fahrenheitToKelvin(fahrenheit).toFixed(2);
  }

  if (kelvinInput !== '') {
    const kelvin = parseFloat(kelvinInput);

    document.getElementById('kelvin').value = kelvinToCelsius(kelvin).toFixed(2);
    document.getElementById('kelvin').value = kelvinToFahrenheit(kelvin).toFixed(2);
  }
})


/*

Formula for Celsius to Fahrenheit:
Fahrenheit = (Celsius * 9/5) + 32

Formula for Fahrenheit to Celsius:
Celsius = (Fahrenheit - 32) * 5/9

Formula for Celsius to Kelvin:
Kelvin = Celsius + 273

Formula for Kelvin to Celsius:
Celsius = Kelvin - 273

Formula for Fahrenheit to Kelvin:
Kelvin = (Fahrenheit - 32) * 5/9 + 273.15

Formula for Kelvin to Fahrenheit:
Fahrenheit = ((Kelvin - 273) * 5/9) + 32
*/