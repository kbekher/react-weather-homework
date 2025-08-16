import React from "react";

import "./Forecast.css";

import WeekDay from "./WeekDay.js";

import aImg from "./img/01d.png";
import anImg from "./img/01n.png";
import bImg from "./img/02d.png";
import bnImg from "./img/02n.png";
import cImg from "./img/03d.png";
import cnImg from "./img/03n.png";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecast-wrap">
        <WeekDay day="Sunday" date="12/02" temp={-1} img={aImg} />
        <WeekDay day="Monday" date="13/02" temp={-2} img={anImg} />
        <WeekDay day="Tuesday" date="14/02" temp={-1} img={bnImg} />
        <WeekDay day="Wednesday" date="15/02" temp={-3} img={bImg} />
        <WeekDay day="Thursday" date="16/02" temp={-1} img={cImg} />
        <WeekDay day="Friday" date="17/02" temp={-5} img={cnImg} />
      </div>
    </div>
  );
}
