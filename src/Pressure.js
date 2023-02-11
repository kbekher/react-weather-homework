import React from "react";
import pressureImage from "./img/Pressure.svg";

export default function Pressure(props) {
  return (
    <div className="Pressure">
      <div className="text-section">
        <span className="property">Pressure</span>
        <div className="property-value">
          {props.value} <span>hPa</span>
        </div>
      </div>
      <div className="image-section">
        <img src={pressureImage} alt="pressure-icon" />
      </div>
    </div>
  );
}
