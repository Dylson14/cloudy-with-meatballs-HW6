var searchBtn = document.getElementById("searchBtn");
var cityNameEl = document.getElementById("#current-city");
var cityInputEl = document.getElementById("city-input-id");

{/* <h1 id="current-city" class="text-3xl">Atlanta 2021-03-14</h1>
          <p id="current-temp">Temp: 12 Celcius</p>
          <p id="current-wind-speed">Wind: 5km/hr</p>
          <p id="current-humidity">Humidity: 50%</p>
          <p id="current-uv">UV index: 0.4</p> */}


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
    });
};

searchBtn.addEventListener("click", () => {
  event.preventDefault();
  var cityTerm = cityInputEl.value;
  getWeather(cityTerm);
});
