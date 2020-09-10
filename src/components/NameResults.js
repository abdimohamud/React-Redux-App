import React from "react";

const NameResults = ({ country }) => {
  console.log(country.country_id);
  const flagURL = `http://www.geognos.com/api/en/countries/flag/${country.country_id}.png`;
  const bioURL = `http://www.geognos.com/geo/en/cc/${country.country_id.toLowerCase()}.html`;
  const num = Number(country.probability.toFixed(3));
  console.log(num);
  return (
    <div className="resultsCont">
      <div className="flag">
        <img src={flagURL} alt="countryflag" />
      </div>
      <div className="results">
        <h1>{country.country_id}</h1>
        <h2>
          <i>{num}</i>
        </h2>
        <a href={bioURL}> Click To Learn More!</a>
      </div>
    </div>
  );
};
export default NameResults;
