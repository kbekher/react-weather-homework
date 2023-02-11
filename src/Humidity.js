import React from "react";
import humidityImage from "./img/Humidity.svg";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <div className="text-section">
        <span className="property">Humidity</span>
        <div className="property-value">
          {" "}
          {props.value} <span>%</span>
        </div>
      </div>
      <div className="image-section">
        <img src={humidityImage} alt="humidity-icon" />
      </div>
    </div>
  );
}
