import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./SearchEngine.css";

import searchIcon from "./img/search.png";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <div className="search-box">
        <form autoComplete="off" className="align-items-center">
          <img src={searchIcon} alt="search-icon" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Change the city..."
          />
        </form>
      </div>
    </div>
  );
}
