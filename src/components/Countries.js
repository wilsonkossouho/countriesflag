import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValueCountry, setRangeValueCountry] = useState(36);

  const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [radioValue, setRadioValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValueCountry}
          onChange={(e) => setRangeValueCountry(e.target.value)}
          name=""
          id=""
        />
        {radio.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="radio-continents"
              checked={continent === radioValue}
              onChange={(e) => setRadioValue(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {radioValue && (
        <button onClick={() => setRadioValue("")}>Annuler la recherche</button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(radioValue))
          .sort((a, b) => b.population - a.population)
          .slice(1, rangeValueCountry)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
