import React from "react";

import "./Properties.css";

import Wind from "./Wind";
import Humidity from "./Humidity";
import Pressure from "./Pressure";

export default function Properties(props) {
  return (
    <div className="Properties">
      <Wind value={props.wind} />
      <Humidity value={props.humidity} />
      <Pressure value={props.pressure} />
    </div>
  );
}
