const convertToCelsius = fahrenheitValue => {

  // convert fahrenheit to celsius rounded to 1 decimal place
  let celsiusValue = (fahrenheitValue - 32) * (5/9);
  return Math.round(celsiusValue * 10) / 10;
};

const convertToFahrenheit = celsiusValue => {

  // convert celsius to fahrenheit rounded to 1 decimal place
  let fahrenheitValue = celsiusValue * (9/5) + 32;
  return Math.round(fahrenheitValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
