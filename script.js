var searchBtn = document.getElementById("searchBtn");
var cityInputEl = document.getElementById("city-input-id");
var currentCityEl = document.getElementById("current-city");
var currentTimeEl = document.getElementById("current-time");
var currentTemp = document.getElementById("current-temp");
var currentWindSpeed = document.getElementById("current-wind-speed");
var currentHumidity = document.getElementById("current-humidity");
var currentUV = document.getElementById("current-uv");




const APIKey = "7fc61c72acc56d32571bd5733eda5a09";

const getWeather = (cityTerm) => {
  event.preventDefault();
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityTerm}&appid=${APIKey}`;
  console.log(`This is inside of getWeather:${cityTerm}`);

  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      currentCityEl.textContent = data.name;
      var weatherIcon = data.weather[0].icon



      currentCityEl.append((weatherIcon))

      

    });

};

searchBtn.addEventListener("click", () => {
  event.preventDefault();
  var cityTerm = cityInputEl.value;
  getWeather(cityTerm);
});
