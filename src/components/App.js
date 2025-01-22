
import React, { useEffect } from "react";
import './../styles/App.css';
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

 const[temperature,setTemperature] = useState(25);
 const[conditions,setConditions]   = useState("Sunny");
 const [weather, setWeather] = useState({ Temp: 25, Cond: "Sunny" });


 const handleTemperatureChange = (e) => {
  const value = parseInt(e.target.value, 10);
  setTemperature(isNaN(value) ? '' : value);
};

 useEffect(() => {
  setWeather({
    Temp: temperature,
    Cond: conditions,
  });
}, [temperature, conditions]);





  return (
    <div>
        {/* Do not remove the main div */}

        <label htmlFor="temp">Temperature :</label>
        <input type="number" id="temp" value={temperature} onChange={handleTemperatureChange}/>
        <br/>
        <label htmlFor="cond">Conditions :</label>
        <input type="text" id="cond" value={conditions} onChange={(e)=>{setConditions(e.target.value)}}/>
        <WeatherDisplay data={weather}/>
    </div>
  )
}

export default App
