import React from "react";

const TotalDeaths = props => {
  return (
    <li style={{ borderBottom: "1px solid white", padding: "5px" }}>
      {props.name}: {props.totalDeaths}
    </li>
  );
};

export default TotalDeaths;
