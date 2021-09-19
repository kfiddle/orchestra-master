import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { label, type, checked, onChange, placeholder, style } = props;

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input type={type} ref={ref} placeholder={placeholder}></input>
    </div>
  );
});

export default Input;
