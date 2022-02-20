import React from "react";

import classes from "./Input.module.css";

const BigInput3 = (props) => {
  const { setPerformance, performance } = props.stateFuncs;
  const label = props.label;
  const key = props.keyName;
  const style = props.style;

  const populator = (event, key) => {
    setPerformance({ ...performance, [key]: event.target.value });
  };

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input
        className={classes.control}
        type="text"
        onChange={(event) => populator(event, key)}
        style={style}
      ></input>
    </div>
  );
};

export default BigInput3;
