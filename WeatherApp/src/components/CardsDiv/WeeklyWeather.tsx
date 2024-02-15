import responseType from "../../props"
import "./WeeklyWeather.css"
import { FaRegSnowflake } from "react-icons/fa";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import {TiWeatherSunny  } from "react-icons/ti";
import { IoWaterOutline } from "react-icons/io5";



interface weeklyWeatherProps{
  data:responseType;
}

const getYourDay=(date:string)=>{
  const d = new Date(date);
  var day;
  switch (d.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
}

const WeeklyWeather = ({data}:weeklyWeatherProps) => {
  return (
    <div className="d-flex col weeklyweatherdiv">
      <div className="weekly-card flex-grow-1">
        <h6>Today</h6>
        <div className="weekly-card-temp">
          <h6 >{data.forecast.forecastday[0].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[0].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[0].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[0].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>

      <div className="weekly-card flex-grow-1">
        <h6>{getYourDay(data.forecast.forecastday[1].date)}</h6>
        <div className="weekly-card-temp">          
          <h6 >{data.forecast.forecastday[1].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[1].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[1].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[1].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>

      <div className="weekly-card flex-grow-1">
      <h6>{getYourDay(data.forecast.forecastday[2].date)}</h6>
        <div className="weekly-card-temp">          
          <h6 >{data.forecast.forecastday[2].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[2].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[2].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[2].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>

      <div className="weekly-card flex-grow-1">
      <h6>{getYourDay(data.forecast.forecastday[3].date)}</h6>
        <div className="weekly-card-temp">          
          <h6 >{data.forecast.forecastday[3].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[3].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[3].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[3].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>

      <div className="weekly-card flex-grow-1">
        <h6>{getYourDay(data.forecast.forecastday[4].date)}</h6>
        <div className="weekly-card-temp">          
          <h6 >{data.forecast.forecastday[4].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[4].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[4].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[4].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>

      <div className="weekly-card flex-grow-1">
        <h6>{getYourDay(data.forecast.forecastday[5].date)}</h6>
        <div className="weekly-card-temp">          
          <h6 >{data.forecast.forecastday[5].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[5].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[5].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[5].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>      

      <div className="weekly-card flex-grow-1">
        <h6>{getYourDay(data.forecast.forecastday[6].date)}</h6>
        <div className="weekly-card-temp">          
          <h6 >{data.forecast.forecastday[6].day.avgtemp_c.toString()}°C</h6>
          <p className="m-0">{data.forecast.forecastday[6].day.daily_chance_of_snow>=25&&<FaRegSnowflake/>}{data.forecast.forecastday[6].day.daily_chance_of_rain>=25?<BsCloudRainHeavyFill/>:<TiWeatherSunny size={"30px"}/>}</p>
          <p >{data.forecast.forecastday[6].day.avghumidity}%<IoWaterOutline size={"15px"} className="mb-1"/></p>
        </div>
      </div>

    </div>
  )
}

export default WeeklyWeather