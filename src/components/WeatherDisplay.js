import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../styles/Weather.css';




const WeatherDisplay = (props) => {
    console.log(typeof props.data.Temp);
    console.log(typeof props.data.Cond);

    const[above,setAbove] = useState(false);


    useEffect(() => {
        if (props.data.Temp > 20) {
          setAbove(true);
        } else {
          setAbove(false);
        }
      }, [props.data.Temp]);


    return (
      <div>
        <p className={above ? "heat" : "Heat"}>{props.data.Temp}°C</p>
        <p>{props.data.Cond}</p>
      </div>
    );
  };
  
  
  export default WeatherDisplay;
  