import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo] = useState({
        city : "Delhi",
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 43,
        weather : "haze",
        feelsLike : 23.4,
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <br /><br />
            <h1 style={{backgroundColor : "black", padding:"1rem", color:"orange" , textShadow : "0 0 .5rem red", border:"0.1rem solid orange"}}>Weather App</h1> <br />
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}