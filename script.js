// Bringing in all the HTML elements I wish to connect with using the DOM
var searchBtn = document.getElementById("search-btn");
var cityInputEl = document.getElementById("city-input-id");
var currentCityEl = document.getElementById("current-city");
var currentTimeEl = document.getElementById("current-time");
var currentIconEl = document.getElementById("current-icon");
var currentTemp = document.getElementById("current-temp");
var currentWindSpeed = document.getElementById("current-wind-speed");
var currentHumidity = document.getElementById("current-humidity");
var currentUV = document.getElementById("current-uv");

// Inputing the APIKey which will give me access to server
const APIKey = "7fc61c72acc56d32571bd5733eda5a09";

// getWeather func: responsible for outputting weather in the user-inputted city
const getWeather = (city) => {
  event.preventDefault();
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      currentCityEl.textContent = data.name;
      var weatherIcon = data.weather[0].icon

      const showIcon = (weatherIcon) => {
        currentIconEl.textContent = weatherIcon;
        // var currentWethImg = `assets/images/${weatherIcon}@2x.png`;
        // var currentWethIconImg = document.createElement("img");
        // currentWethIconImg.attribute("src", currentWethImg);

        //  $("#currentCityInfo").append(currentWethIconImg);
      }

      showIcon(weatherIcon);
      
    });

};

searchBtn.addEventListener("click", () => {
  event.preventDefault();
  var city = cityInputEl.value;
  getWeather(city);
});
