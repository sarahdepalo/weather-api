'use strict'


function fetchWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=tampa&appid=c58c3fb30ceedded908944ec0edfb311").then(function(response) {
        return response.json();
    }).then(function(data) {
        updateWeather(data);
        console.log("Category data is: ", data);
    });
}
// p that contains the weather result
const weather = document.querySelector('#weather');

const weatherButton = document.querySelector('#getWeather');

function updateWeather(data) {
    const theWeather = `The temperature for ${data.name} is ${data.main.temp}, but it feels like ${data.main.feels_like}.`;
    weather.innerText = theWeather;
}

weatherButton.addEventListener('click', function() {
    fetchWeather();
})


// fetchWeather();

