import React from "react";

const Card = ({ country }) => {
  return (
    <li>
      <div className="card">
        <img
          src={country.flags.svg}
          alt={"Drapeau de " + country.name.common}
        />
        <div className="infos">
          <h2>{country.name.common}</h2>
          <h4>{country.capital}</h4>
          <p>Pop. {country.population.toLocaleString()}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
