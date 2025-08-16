import React from "react";

import "./TodayWeather.css";

import SearchEngine from "./SearchEngine.js";
import MainInfo from "./MainInfo.js";
import Properties from "./Properties.js";

export default function TodayWeather() {
  return (
    <div className="TodayWeather">
      <SearchEngine />
      <MainInfo />
      <Properties wind={0.45} humidity={88} pressure={1002} />
    </div>
  );
}
