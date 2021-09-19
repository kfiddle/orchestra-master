import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { label, type, checked, onChange, placeholder } = props;

  return (
    <div className={classes.control}>
      <label>{label}</label>
      <input type={type} ref={ref} placeholder={placeholder}></input>
    </div>
  );
});

export default Input;
