citySearch.addEventListener('click', search);



 function search(){
    var cityName = document.getElementById('cityName').value;

    var http = new XMLHttpRequest();
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e&units=metric`;

    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function() {
        var results = JSON.parse(http.responseText)

        
        document.getElementById('city').innerHTML = results.name;
        document.getElementById('Currentweather').innerHTML = Math.round(parseFloat(results.main.temp)) + ' °C';
        document.getElementById('description').innerHTML = results.weather[0].description;
        document.getElementById('humidity').innerHTML = Math.round(parseFloat(results.main.humidity)) + '%';
        document.getElementById('pressure').innerHTML = Math.round(parseInt(results.main.pressure)) + 'hPa';
        document.getElementById('wind').innerHTML = Math.round(parseFloat(results.wind.speed)) + 'km/h';
    }

}