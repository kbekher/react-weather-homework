import React from "react";

import "./Properties.css";

import Wind from "./Wind.js";
import Humidity from "./Humidity.js";
import Pressure from "./Pressure.js";

export default function Properties(props) {
  return (
    <div className="Properties">
      <Wind value={props.wind} />
      <Humidity value={props.humidity} />
      <Pressure value={props.pressure} />
    </div>
  );
}
