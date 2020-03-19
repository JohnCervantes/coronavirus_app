import React from "react";
import classes from "../containers/Homepage.module.css";

const TotalDeaths = props => {
  return (
    <div className={classes.ListStyle}>
      <li onClick={props.clicked}>
        {props.name}:{" "}
        <span style={{ color: "#80ff00" }}> {props.totalRecovered} </span>
      </li>
    </div>
  );
};

export default TotalDeaths;
