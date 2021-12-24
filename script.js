var searchBtn = document.getElementById("searchBtn")
var cityNameEl = document.getElementById("cityName")
var cityInputEl = document.getElementById("cityInputId")
// const cityInput = document.queryselector("#cityInputId")
console.log("test")

// var testInput = "Atlanta"
const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a"





const getWeather = (cityTerm) => {
    event.preventDefault()
    console.log(`This is inside of getWeather: ${cityTerm}`);
    // var queryURL = `api.openweathermap.org/data/2.5/weather?q=${cityTerm}&appid=${APIKey}`
    // var queryURL = `https://api.github.com/users/${cityTerm}/repos` <-- This was a test of a different API
    
    fetch(queryURL)
     .then((res) => {
         c
        console.log(`This is inside of the fetch: ${res}`);
        })
     .then(()=> {
         
     })
        
}

// searchBtn.addEventListener("click", getWeather)

// const testFunc = () => {
//     event.preventDefault();
//     console.log("HORRAY testFunc works!")
// }

searchBtn.addEventListener("click", () => {
   const cityTerm = cityInputId.value;
   console.log(`This is the searchBtn listener: ${cityTerm}`);
   getWeather(cityTerm);

})




