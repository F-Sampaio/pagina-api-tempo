citySearch.addEventListener('click', search);

 function search(){
    //  Get the city
    var cityName = document.getElementById('cityName').value;

    // Current request and api call
        var httpCurrent = new XMLHttpRequest();
        var currentUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e&units=metric`;
        httpCurrent.open("GET", currentUrl, true);
        httpCurrent.send();

        httpCurrent.onreadystatechange = function() {
            var currentResult = JSON.parse(httpCurrent.responseText);
            var iconResult = `http://openweathermap.org/img/w/${currentResult.weather[0].icon}.png`;

    
            
            document.getElementById('city').innerHTML = currentResult.name;
            document.getElementById('Currentweather').innerHTML = Math.round(parseFloat(currentResult.main.temp)) + ' °C';
            document.getElementById('description').innerHTML = currentResult.weather[0].description;
            document.getElementById('humidity').innerHTML = Math.round(parseFloat(currentResult.main.humidity)) + '%';
            document.getElementById('pressure').innerHTML = Math.round(parseInt(currentResult.main.pressure)) + 'hPa';
            document.getElementById('wind').innerHTML = Math.round(parseFloat(currentResult.wind.speed)) + 'km/h';
            document.getElementById('imIcon').setAttribute('src', iconResult);


            mainCard.style.visibility = 'visible';
        }
        // Forecast 5 Days request and api call
        var httpForecast = new XMLHttpRequest();
        var forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e&units=metric`;
        httpForecast.open("GET", forecastUrl, true);
        httpForecast.send();

        httpForecast.onreadystatechange = function() {
            var forecastResult = JSON.parse(httpForecast.responseText);
            console.log(forecastResult);
        }



 
}

