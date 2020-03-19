import React from "react";
import classes from "../containers/Homepage.module.css";

const TotalConfirmed = props => {
  return (
    <div className={classes.ListStyle}>
      <li onClick={props.clicked}>
        {props.name}: <span style={{ color: "red" }}>{props.totalCases}</span>
      </li>
    </div>
  );
};

export default TotalConfirmed;
