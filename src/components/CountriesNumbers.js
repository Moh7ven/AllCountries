import React from "react";

const CountriesNumbers = (props) => {
  return (
    <div className="countriesNumbers">
      <p>
        Number of countries: <span className="number">{props.counter}</span>
      </p>
    </div>
  );
};

export default CountriesNumbers;
