import "./CardsDiv/CardsDiv.css"
import WeatherToday from "./CardsDiv/WeatherToday"

import { TfiLocationPin } from "react-icons/tfi";
import WeeklyWeather from "./CardsDiv/WeeklyWeather";
import responseType from "../props";

interface cardsDivProps{
  data:responseType
}


const CardsDiv = ({data}:cardsDivProps) => {
  return (
    <div className="cards-div">
      <div >
        <div className="text-location d-flex align-items-center justify-content-center">
          <h6>{data.location.name}, {data.location.country}</h6>
          <TfiLocationPin className="location-icon"/>
        </div>
        <WeatherToday data={data} />
        {data.forecast&&<WeeklyWeather data={data}/>}
      </div>
    </div>
  )
}

export default CardsDiv