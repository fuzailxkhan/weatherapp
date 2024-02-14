import "./WeatherToday.css"
import { TiWeatherPartlySunny } from "react-icons/ti";


const WeatherToday = () => {
  return (
    <div className="d-flex col weather-today">
      <div className="temperature">
        
        <div className="d-flex text-degree">
          <h1 className="m-0">30°C <TiWeatherPartlySunny className="mb-2"/></h1>
        </div>

        
          <h3>Cloudy</h3>
          <p>Feels like 34°C</p>
        

        

      </div>

      <div className="temperature-details">
        <h4>Humidity: 48%</h4>
        <h4>Windspeed: 6mph</h4>
      </div>
    </div>
  )
}

export default WeatherToday