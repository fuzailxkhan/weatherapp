import responseType from "../../props";
import "./WeatherToday.css"
import { TiWeatherPartlySunny,TiWeatherSunny  } from "react-icons/ti";
import { IoWaterOutline } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { WiRainWind } from "react-icons/wi";




interface weatherTodayProps{
  data:responseType
}


const WeatherToday = ({data}:weatherTodayProps) => {
  return (
    <div className="d-flex col weather-today">
      <div className="temperature">
        
        <div className="d-flex text-degree">
          <h1 className="m-0">{data.current.temp_c.toString()}°C {data.current.cloud==1?<TiWeatherPartlySunny className="mb-2"/>:<TiWeatherSunny className="mb-2" />}</h1>
        </div>
          <h3>{data.current.cloud==1?"Cloudy":"Sunny"}</h3>
          <p>Feels like {data.current.feelslike_c.toString()}°C</p>
      </div>

      <div className="temperature-details">
        <h5>Humidity: {data.current.humidity.toString()}%<IoWaterOutline size={"20px"} className="mb-1"/></h5>
        <h5>Precipitation: {data.current.precip_in.toString()}% <WiRainWind /></h5>
        <h5>Windspeed: {data.current.wind_kph.toString()} kph <LuWind /></h5>
      </div>
    </div>
  )
}

export default WeatherToday