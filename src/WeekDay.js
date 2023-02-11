import React from "react";

import "./WeekDay.css";

export default function WeekDay(props) {
  return (
    <div className="WeekDay">
      <div className="text-section">
        <span className="day">{props.day}</span>
        <span className="date">{props.date}</span>
        <div className="temp">{props.temp} °C</div>
      </div>
      <div className="image-section">
        <img src={props.img} alt="weather-icon" className="weather-image" />
      </div>
    </div>
  );
}
