//challange 2
let apiKey = "40b745c14eadad7b7c4e6e4bf3b70103";
let city = "Sydney";
let units = "metric";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

function showTemperatre(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);

  let city = response.data.name;
  let topic = `It is ${temperature} degrees, in
  ${city}`;
  let h1 = document.querySelector("#weather");
  h1.innerHTML = topic;
}

axios.get(apiUrl).then(showTemperatre);
