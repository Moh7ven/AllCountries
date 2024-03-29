import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CountriesNumbers from "./CountriesNumbers";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");
  // Le userEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  const CountryPrint = () => {
    return data
      .filter((country) => country.continents[0].includes(selectedRadio))
      .sort((a, b) => b.population - a.population)
      .slice(0, rangeValue)
      .map((country, index) => (
        //   <li key={index}>{country.translations.fra.common}</li>
        <Card key={index} country={country} />
      ));
  };

  const countriesToShow = CountryPrint();

  return (
    <div className="countries">
      <CountriesNumbers counter={countriesToShow.length} />
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radio.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>{countriesToShow}</ul>
    </div>
  );
};

export default Countries;
