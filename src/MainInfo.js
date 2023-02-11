import React from "react";

import "./MainInfo.css";
import weatherImg from "./img/03d.png";

export default function MainInfo() {
  return (
    <div className="MainInfo">
      <div className="text-section">
        <div className="main">
          <h1 className="city">Kyiv</h1>
          <p className="current-date">Saturday 21:15</p>
        </div>
        <div className="temperature-section">
          <div className="temperature">-1</div>
          <div className="scale-switcher">
            <div className="scale">
              <a href="/" className="scale-link">
                C
              </a>
            </div>
            <div className="scale turned-off">
              <a href="/" className="scale-link">
                F
              </a>
            </div>
          </div>
          <div className="description">Overcast clouds</div>
        </div>
      </div>
      <div className="image-section">
        <img src={weatherImg} alt="weather icon" />
      </div>
    </div>
  );
}
