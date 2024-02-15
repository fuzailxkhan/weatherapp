
type responseType = {
    location:{
            country:string,
            name:string,
            region:string,
          },
    current:{
            humidity:number,
            temp_c:number,
            temp_f:number,
            wind_kph:number,
            cloud:number,
            feelslike_c: number,
            precip_in: number,
          },
    forecast:{
      forecastday:{date:string,
        day:{avghumidity:number,avgtemp_c:number,daily_chance_of_rain:number,daily_chance_of_snow:number,maxwind_kph:number,totalprecip_in:number}
       }[]},
  }

  export default responseType;