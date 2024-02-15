
type responseType = {
    location:{
            country:String,
            name:String,
            region:String,
          },
          current:{
            humidity:Number,
            temp_c:Number,
            temp_f:Number,
            wind_kph:Number,
            cloud:Number,
            feelslike_c: Number,
            precip_in: Number,
          }
  }

  export default responseType;