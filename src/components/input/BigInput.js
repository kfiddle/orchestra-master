import React from "react";

import classes from "./Input.module.css";

const BigInput = React.forwardRef((props, ref) => {
  const { label, key, populator, pObject, style, type, value } =
    props.inputObject;

  const placeHolder = pObject[key];

  let inputType = "text";

  !type ? (inputType = "text") : (inputType = type);
  // className={classes.control}
  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input
        type={inputType}
        ref={ref}
        onChange={(event) => populator(event, key)}
        value={value}
        placeholder={placeHolder}
        style={style}
      ></input>
    </div>
  );
});

export default BigInput;
