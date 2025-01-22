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
        <p className={above ? "heat" : "Heat"}>Temperature: {props.data.Temp}</p>
        <p>Conditions: {props.data.Cond}</p>
        <br></br>
        <span style={{ color: above ? 'red' : 'blue' }}>
        {above ? 'Hot' : 'Cold'}
      </span>
      </div>
    );
  };
  
  
  export default WeatherDisplay;
  