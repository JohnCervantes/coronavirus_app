import React from "react";

const Summary = props => {
  return (
    <div>
     
      <p>
        Total confirmed:{" "}
        <span style={{ fontSize: "30px", color: "red" }}>
          {props.summary.cases}
        </span>
      </p>
      <p>
        Total deaths:{" "}
        <span style={{ fontSize: "30px"}}>
          {props.summary.deaths}
        </span>
      </p>
      <p>
        Total Recovered:{" "}
        <span style={{ fontSize: "30px",  color: "#80ff00"  }}>
          {props.summary.recovered}
        </span>
      </p>
    </div>
  );
};

export default Summary;
