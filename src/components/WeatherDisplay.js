import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../styles/Weather.css';




const WeatherDisplay = (props) => {
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
        <span className={above ? "heat" : "Heat"}>Temperature: {props.data.Temp}</span>
        <p>{props.data.Cond}</p>
      </div>
    );
  };
  
  
  export default WeatherDisplay;
  