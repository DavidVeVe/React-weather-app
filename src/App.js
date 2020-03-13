import React, { Fragment, useState, useEffect } from "react";

import SearchForm from "./components/form/";
import Stats from "./components/stats/";

const API_KEY = "2915ce5b8d2735204f8a2d49c9510b33";

function App() {
  const getWeather = async e => {
    e.preventDefault();
    const call_api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Zapopan&appid=${API_KEY}&units=metric`
    );
    const parsedData = await call_api.json();
    console.log(parsedData);
  };

  return (
    <Fragment>
      <SearchForm getWeather={getWeather} />
      <Stats />
    </Fragment>
  );
}

export default App;
