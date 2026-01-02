//* Selection the UI fields for give data in it:-
let searchBtn = document.querySelector(".searchBtn");
let searchInp = document.querySelector(".searchCityInp")
let city = document.querySelector(".city");
let dateVal = document.querySelector(".date");
let temprature = document.querySelector(".temprature");
let condition = document.querySelector(".condition");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let pressure = document.querySelector(".pressure");
let feels = document.querySelector(".feels");
let wetherApp = document.querySelector(".weather-app");


//* Weather API key:-
const API_KEY = '0567c70b21126eb12b5cc516bb7e2750';


//* API data feching function:-
async function fetchWeatherDate(city) {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("City not found!")
    }
    const data = await res.json();
    updateUIData(data);

  } catch (error) {
    alert('City not found!');
  }
}


//* UI updation after API Call:-
function updateUIData(data) {
  // City/Country data:-
  city.textContent = data.name;

  // Day ,Date and month data:-
  let date = new Date(data.dt * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let day = date.getDate();
  let dayName = days[date.getDay()];
  let monthName = months[date.getMonth()];

  // Day ,date and month:-
  dateVal.textContent = `${dayName} ,${day} ${monthName}`;

  // Weather temprature data:-
  temprature.textContent = `${Math.floor(data.main.temp - 273.15)}`;

  // Weather condition data:-
  condition.textContent = data.weather[0].main;

  // Weather humidity data:-
  humidity.textContent = `${data.main.humidity}%`;

  // Weather wind speed data:-
  wind.textContent = `${Math.floor(data.wind.speed)} km/h`;

  // Weather pressure data:-
  pressure.textContent = `${data.main.pressure} hPa`;

  // Weather feels like temprature data:-
  feels.textContent = `${Math.floor(data.main.feels_like - 273.15)}°C`;
}



//* SearchBtn event for API Call:-
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let city = searchInp.value.trim();
  if (city === "") return;
  fetchWeatherDate(city);
  searchInp.value = "";
})


