import React from "react";

import classes from "./Input.module.css";

const BigInput3 = props => {
//   const { label, key, populator, pObject, style, type, value } = props.inputObject;

  const {setPerformance, performance} = props.stateFuncs;
  const label = props.label;
  const key = props.keyName;
  const style = props.style;

  const populator = (event, key) => {
    setPerformance({ ...performance, [key]: event.target.value });
  };


//   const placeHolder = pObject[key];

//   let inputType = "text";

//   !type ? (inputType = "text") : (inputType = type);

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input className={classes.control}
        // type={inputType}

        type='text'
        onChange={(event) => populator(event, key)}
        // value={value}
        // placeholder={placeHolder}
        style={style}
      ></input>
    </div>
  );
};

export default BigInput3;
