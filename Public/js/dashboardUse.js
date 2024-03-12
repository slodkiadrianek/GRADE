"use strict";

const temperature = document.querySelector(".temperature");
const feelsTemperature = document.querySelector(".feelsTemperature");
const humidity = document.querySelector(".humidity");
const condition = document.querySelector(".condition");
const pressure = document.querySelector(".pressure");

//latitude/longtitude
async function dowloadWeather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=76d4e114b6ee4c47851162819241203&q=51.4145632,17.9436069&aqi=yes"
  );
  const data = await response.json(); // waits until the promise resolves
  const weatherData = {
    temperature: data.current.temp_c,
    feelsTemperature: data.current.feelslike_c,
    humidity: data.current.humidity,
    condition: data.current.condition.text,
    pressure: data.current.pressure_mb,
  };
  temperature.textContent = `${weatherData.temperature}°C`;
  feelsTemperature.textContent = `${weatherData.feelsTemperature}°C`;
  humidity.textContent = `${weatherData.humidity}%`;
  condition.textContent = weatherData.condition;
  pressure.textContent = `${weatherData.pressure}/mbar`;
}
dowloadWeather();
