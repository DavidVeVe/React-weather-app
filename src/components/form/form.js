import React from "react";

const SearchForm = props => {
  return (
    <form>
      <input type="text" placeholder="City..." />
      <button onClick={props.getWeather}>Search weather</button>
    </form>
  );
};

export default SearchForm;
