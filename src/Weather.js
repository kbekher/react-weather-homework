import React from "react";

import "./Weather.css";

import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";
import CodedBy from "./CodedBy";

export default function Weather() {
  return (
    <div className="Weather">
      <TodayWeather />
      <Forecast />
      <CodedBy />
    </div>
  );
}
