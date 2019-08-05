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
            
            mainCard.setAttribute('style', 'visibility: visible');
        
        }
        // Forecast 5 Days request and api call
        var httpForecast = new XMLHttpRequest();
        var forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e&units=metric`;
        httpForecast.open("GET", forecastUrl, true);
        httpForecast.send();

        httpForecast.onreadystatechange = function() {
            var forecastResult = JSON.parse(httpForecast.responseText);
            // var ForecastIconResult = `http://openweathermap.org/img/w/${forecastResult.list.weather[0].icon}.png`;

            for (var i in forecastResult.list) {

                // Results
                var forecastHeader = document.createTextNode(forecastResult.list[i].dt_txt);
                var forecastWeather = document.createTextNode(forecastResult.list[i].main.temp);
                var forecastDescription = document.createTextNode(forecastResult.list[i].weather[0].description);
                var forecastPressure = document.createTextNode(forecastResult.list[i].main.pressure);
                var forecastHumidity = document.createTextNode(forecastResult.list[i].main.humidity);
                var forecastWind = document.createTextNode(forecastResult.list[i].wind.speed);

                // Element LI
                var ulForecast = document.getElementById('forecastCollapsible');
                var liForecast = document.createElement('li');
                ulForecast.appendChild(liForecast);

                // Header ID & Class
                var divHeaderForecast = document.createElement('div');
                var divHeaderForecastAttClass = document.createAttribute('class'); //Class
                divHeaderForecastAttClass.value = 'collapsible-header';
                divHeaderForecast.setAttributeNode(divHeaderForecastAttClass);
                var divHeaderForecastAttID = document.createAttribute('id'); //Id
                divHeaderForecastAttID.value = 'forecastHeader';
                divHeaderForecast.setAttributeNode(divHeaderForecastAttID);

                // Body ID & Class
                var divBodyForecast = document.createElement('div');
                var divBodyForecastAttClass = document.createAttribute('class'); //Class
                divBodyForecastAttClass.value = 'collapsible-body';
                divBodyForecast.setAttributeNode(divBodyForecastAttClass);
                var divBodyForecastAttID = document.createAttribute('id'); //Id
                divBodyForecastAttID.value = 'forecastBody';
                divBodyForecast.setAttributeNode(divBodyForecastAttID);
              
                // Insert Text into spans
                var spanWeather = document.createElement('span');
                spanWeather.appendChild(forecastWeather);
                var spanWeatherAttID = document.createAttribute('id');
                spanWeatherAttID.value = 'spanWea';
                spanWeather.setAttributeNode(spanWeatherAttID);

                var spanDescription = document.createElement('span');
                spanDescription.appendChild(forecastDescription);
                var spanDescriptionAttID = document.createAttribute('id');
                spanDescriptionAttID.value = 'spanDesc';
                spanDescription.setAttribute('id', spanDescriptionAttID);

                var spanPressure = document.createElement('span');
                spanPressure.appendChild(forecastPressure);
                var spanPressureAttID = document.createAttribute('id');
                spanPressureAttID.value = 'spanPre';
                spanPressure.setAttribute('id', spanDescriptionAttID);

                var spanHumidity = document.createElement('span');
                spanHumidity.appendChild(forecastHumidity);
                var spanHumidityAttID = document.createAttribute('id');
                spanHumidityAttID.value = 'spanHum';
                spanHumidity.setAttribute('id', spanHumidityAttID);
                
                var spanWind = document.createElement('span');
                spanWind.appendChild(forecastWind);
                var spanWindAttID = document.createAttribute('id');
                spanWindAttID.value = 'spanWind';
                spanWind.setAttribute('id', spanWindAttID);

                // Insert Spans into Divs
                var divWeather = document.createElement('div');
                var divWeatherAttID = document.createAttribute('id');
                divWeatherAttID.value = 'divWea';
                divWeather.setAttributeNode(divWeatherAttID);
                divWeather.appendChild(spanWeather);
 
                var divDescription = document.createElement('div');
                var divDescriptionAttID = document.createAttribute('id');
                divDescriptionAttID.value = 'divDesc';
                divDescription.setAttributeNode(divDescriptionAttID);
                divDescription.appendChild(spanWeather);
 
                var divPressure = document.createElement('div');
                var divPressureAttID = document.createAttribute('id');
                divPressureAttID.value = 'divPres';
                divPressure.setAttributeNode(divPressureAttID);
                divPressure.appendChild(spanPressure);
                 
                var divHumidity = document.createElement('div');
                var divHumidityAttID = document.createAttribute('id');
                divHumidityAttID.value = 'divHum';
                divHumidity.setAttributeNode(divHumidityAttID);
                divHumidity.appendChild(spanHumidity);
 
                var divWind = document.createElement('div');
                var divWindAttID = document.createAttribute('id');
                divWindAttID.value = 'divWind';
                divWind.setAttributeNode(divWindAttID);
                divWind.appendChild(spanWind);

                // Insert Header and body to LI
                divHeaderForecast.appendChild(forecastHeader);
                divBodyForecast.append(divWeather, divDescription, divPressure, divHumidity, divWind);

                liForecast.append(divHeaderForecast, divBodyForecast); 
            }

        }

          var elem = document.querySelector('.collapsible.expandable');
            var instance = M.Collapsible.init(elem, {
                accordion: false
            });

            forecastCollapsible.setAttribute('style', 'visibility: visible');
}




