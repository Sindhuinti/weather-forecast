import React from "react";
import locationIcon from "./assets/location-pin.png";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription
}) => (
  <div className="data-box">
    <h2>{weekday}</h2>
    <p>{date}</p>
    <p>
      <img
        width="10"
        height="15"
        src={locationIcon}
        className="mr-1"
        alt="location pin icon"
      />
      <span> {location}</span>
    </p>
    <img width="45" src={weatherIcon} alt="icon" />
    <h2>{temperature} °C</h2>
    <h5>{weatherDescription}</h5>
  </div>
);

export default CurrentDay;
