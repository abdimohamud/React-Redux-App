import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NameResults from "./NameResults";
import { getNameData } from "../actions";

const NameFetch = (props) => {
  const [name, setName] = useState("");

  const handleChanges = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    props.getNameData(name);
  };

  return (
    <div className="nameCont">
      <div className="text-box">
        <input type="text" value={name} onChange={handleChanges} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h3> Results displaying for the name: </h3>
      <h1>{props.data.name}</h1>
      <div className="countries">
        {props.data.country.map((country) => (
          <NameResults key={country.country_id} country={country} />
        ))}
      </div>
      <p>
        <b>
          *Probability of your nationality based on demographics of countries
          that the name is common in.
        </b>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { getNameData })(NameFetch);
