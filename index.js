
let image = document.createElement('img');

var boton = document.getElementById('json_get');

var cityName = document.getElementById('city_name');

boton.addEventListener('click', function() {
  loading.style.display = 'block';
  const apikey = '2fc85ae4f5c94053aa620437223001';
  console.log(city.value);
  axios.get(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName.value}&aqi=no`, {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data);
        country.innerHTML = 'Country: '+ res.data.location.country; 
        city.innerHTML = 'City: '+ res.data.location.name; 
        temp_c.innerHTML = 'Temperature: '+ res.data.current.temp_c + '°C';
        humidity.innerHTML = 'Humidity: '+ res.data.current.humidity + '%';
        climate.innerHTML = 'Climate: '+ res.data.current.condition.text;
        wind_kph.innerHTML = 'Wind: '+ res.data.current.wind_kph + " kp/h";
        console.log(res.data.current.condition.icon);
        image.src = res.data.current.condition.icon;
        document.querySelector('.image').appendChild(image);
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
      mensaje.innerHTML = "There's no data";
    })
    .then(function() {
      loading.style.display = 'none';
      image.style.width = '100px';
      image.style.height = '100px';
    });
});