import React from "react";

import classes from "./Input.module.css";

const BigInput = React.forwardRef((props, ref) => {
  const { label, key, populator, pObject, style } = props.inputObject;

  const placeHolder = pObject[key];

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input
        type={"text"}
        ref={ref}
        onChange={(event) => populator(event, key)}
        placeholder={placeHolder}
        style={style}
      ></input>
    </div>
  );
});

export default BigInput;
