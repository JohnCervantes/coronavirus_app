import React from "react";

const TotalDeaths = props => {
  return (
    <li onClick={props.clicked} style={{cursor: "pointer", borderBottom: "1px solid white", padding: "5px" }}>
      {props.name}: {props.totalDeaths}
    </li>
  );
};

export default TotalDeaths;
