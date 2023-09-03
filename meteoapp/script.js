const container = document.querySelector(".container");

let weather;

const fetchData = async () => {
  await fetch(`http://api.airvisual.com/v2/nearest_city?key=XXXXXXXXXX`)
    .then((res) => res.json())
    .then((res) => (weather = res));
  console.log(weather);
  dataDisplay(weather.data);
};

window.addEventListener("load", fetchData);

const dataDisplay = (weather) => {
  container.innerHTML = `
    <h3>${weather.city}</h3>
    <p class="country">${weather.country}</p>
    <p class="temperature">${weather.current.weather.tp}</p>
    <img class="icon" src="./ressources/icons/${weather.current.weather.ic}.svg" alt="" />
  `;
};
