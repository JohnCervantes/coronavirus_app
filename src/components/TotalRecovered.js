import React from "react";

const TotalDeaths = props => {
  return (
    <li onClick={props.clicked} style={{ cursor: "pointer", borderBottom: "1px solid white", padding: "5px" }}>
      {props.name}:{" "}
      <span style={{ color: "#80ff00" }}> {props.totalRecovered} </span>
    </li>
  );
};

export default TotalDeaths;