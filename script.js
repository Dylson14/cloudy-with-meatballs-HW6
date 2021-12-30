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
var fiveDayForecastEl = document.getElementById("5-day-forecast");

// Inputing the APIKey which will give me access to server
const APIKey = "7fc61c72acc56d32571bd5733eda5a09";

// This is the getUV func, responsible for retreiving the UV data, this is done by using the lat and lon data gathered from the 1st fetch response. This prevents the user from having to input their own lat and lon inputs.
const getUV = (secondData) => {
  console.log(`we are inside the getUV func ${JSON.stringify(secondData)}`);
  currentUV.textContent = secondData.value;
}

const fiveDayForecast = (secondData) => {
  console.log(`We ate inside of the fiveDayForecast func: ${secondData}`)
  var forecastHeading = document.createElement("h1");
  forecastHeading.textContent = "5 day Forecast";
  fiveDayForecastEl.append(forecastHeading);
}

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
      // the temperature is currenlty in kelvin so to convert to celcius you subtract 273 from the current value.
      currentTemp.textContent = `${Math.floor(data.main.temp - 273)}°C`;
      currentWindSpeed.textContent = `${data.wind.speed}MPH`;
      currentHumidity.textContent = `${data.main.humidity}%`;

      var weatherIcon = data.weather[0].icon

      const showIcon = (weatherIcon) => {
        var icon = document.createElement("img");
        icon.setAttribute("src", `https://openweathermap.org/img/w/${weatherIcon}.png`);
        currentIconEl.append(icon);
      }
      showIcon(weatherIcon);
      
      var lat = data.coord.lat;
      var lon = data.coord.lon;

      var UVurl = `https://api.openweathermap.org/data/2.5/uvi?&lat=${lat}&lon=${lon}&appid=${APIKey}`;
      // This section of the code is responsible for calling the getUV func which can be found above the getWeather func. 
      fetch(UVurl)
      .then((secondResponse) => {
        return secondResponse.json();
      })
      .then((secondData) => {
        getUV(secondData);
        
        fiveDayForecast(secondData);
      })


    });

};

searchBtn.addEventListener("click", () => {
  event.preventDefault();
  var city = cityInputEl.value;
  getWeather(city);
});
