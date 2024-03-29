const express = require('express');
const app = express();

const cors = require('cors');
const { default: axios } = require('axios');

app.use(cors());
app.use(express.json())


const getWeather= async (location)=>{
    var response ;
    response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5fe58edafc284b2483685019241402&q=karachi&days=7&aqi=no&alerts=no`);
    
    return (response.data);

}
 

app.get("/getWeather", async(req,res)=>{
    console.log("Req Recieved");
    console.log(req.query.loc);
    var response = await getWeather(req.query.loc);   
    res.json(response);
})


app.listen(3000,err=>{
    if(err) throw err;
    console.log("Server Running at Port 3000")
})