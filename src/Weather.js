import React from "react";

import "./Weather.css";

import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";

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
          class="github-link"
        >
          {" "}
          Open-source code
        </a>{" "}
        <span>by Kristina Bekher</span>
      </footer>
    </div>
  );
}
