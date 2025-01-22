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
        <br></br>
        <span>{props.data.Cond}</span>
      </div>
    );
  };
  
  
  export default WeatherDisplay;
  