import React from "react";
import classes from "../containers/Homepage.module.css";


const TotalDeaths = props => {
  return (
    <div className={classes.ListStyle}>
    <li  onClick={props.clicked}>
      {props.name}: {props.totalDeaths}
    </li>
    </div>
  );
};

export default TotalDeaths;
