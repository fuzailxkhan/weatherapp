import "./CardsDiv/CardsDiv.css"
import WeatherToday from "./CardsDiv/WeatherToday"

import { TfiLocationPin } from "react-icons/tfi";
import WeeklyWeather from "./CardsDiv/WeeklyWeather";


const CardsDiv = () => {
  return (
    <div className="cards-div">
      <div >
        <div className="text-location d-flex align-items-center justify-content-center">
          <h6>Karachi, Pakistan</h6>
          <TfiLocationPin className="location-icon"/>
        </div>
        <WeatherToday />
        <WeeklyWeather />
      </div>
    </div>
  )
}

export default CardsDiv