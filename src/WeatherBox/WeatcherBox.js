import { useState, useEffect } from "react";
import "./WeatherCard.scss";
import moment from "moment";

function DateFormat(myDate){
  let date = moment(myDate).toDate().format('DD.MM.YYYY');
  return(
    <p>{date}</p>
  );
}

const URL =
  "https://api.weatherapi.com/v1/forecast.json?key=1769fe059a4f436f813212222242805&q=London&aqi=no&days=14";
function WeatcherBox() {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setTemp(json.forecast.forecastday);
        console.log(json.forecast.forecastday);
      });
    };
    fetchData();
  }, []);

  

  return (
    <div className="weather_main_box">
      <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">
        &#10094;
      </button>
      <div className="carousel w3-content w3-display-container">
        {temp.map((forecast) => (
          <div className="weather_card carousel_item">
            <img src={forecast.day.condition.icon}/>
            <p>{ moment(forecast.day).toDate().format('DD.MM.YYYY')}</p>
            <p>Data:{DateFormat(forecast.date) }</p>
            <p>{forecast.day.maxtemp_c}°C</p>
          </div>
        ))}
      </div>
      <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">
        &#10095;
      </button>
    </div>
  );
}

export default WeatcherBox;
