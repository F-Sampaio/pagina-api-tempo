citySearch.addEventListener('click', search);

 function search(){
    var cityName = document.getElementById('cityName').innerHTML;

    var http = new XMLHttpRequest();
    var url = `ahttp://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&type=accurate&mode=xml&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e`;

    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function() {
        console.log(cityName);
        console.log(http.responseText)
    }

}