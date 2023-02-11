import React from "react";
import windImage from "./img/Wind.svg";

export default function Wind(props) {
  return (
    <div className="Wind">
      <div className="text-section">
        <span className="property">Wind</span>
        <div className="property-value">
          {props.value} <span>m/h</span>
        </div>
      </div>
      <div className="image-section">
        <img src={windImage} alt="wind-icon" />
      </div>
    </div>
  );
}
