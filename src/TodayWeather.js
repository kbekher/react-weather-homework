import React from "react";

import "./TodayWeather.css";

import SearchEngine from "./SearchEngine";
import MainInfo from "./MainInfo";
import Properties from "./Properties";

export default function TodayWeather() {
  return (
    <div className="TodayWeather">
      <SearchEngine />
      <MainInfo />
      <Properties wind={0.45} humidity={88} pressure={1002} />
    </div>
  );
}
