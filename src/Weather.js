import React from "react";

import "./Weather.css";

import TodayWeather from "./TodayWeather.js";
import Forecast from "./Forecast.js";

export default function Weather() {
  return (
    <div className="Weather">
      <TodayWeather />
      <Forecast />
      <footer className="coded-by">
        <a
          href="https://github.com/kbekher/react-weather-homework"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Open-source code
        </a>
        <span>by Kristina Bekher</span>
      </footer>
    </div>
  );
}
