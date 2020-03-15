import React from "react";

const TotalConfirmed = props => {
  return (
    <li
      onClick={props.clicked}
      style={{
        cursor: "pointer",
        borderBottom: "1px solid white",
        padding: "5px"
      }}
    >
      {props.name}: <span style={{ color: "red" }}>{props.totalCases}</span>
    </li>
  );
};

export default TotalConfirmed;
