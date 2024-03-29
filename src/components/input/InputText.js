import React from "react";

import classes from "./Input.module.css";

const InputText = React.forwardRef((props, ref) => {
  const { label, type, checked, onChange, placeholder, style } = props;

  return (
    <div className={classes.control}>
      <label>{label}</label>
      <input
        type={"text"}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
});

export default InputText;
