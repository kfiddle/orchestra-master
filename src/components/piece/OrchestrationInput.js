import React from "react";

import classes from "./OrchestrationInput.module.css";

const OrchestrationInput = React.forwardRef((props, ref) => {
  return (
    <div className={classes.control}>
      <label>{props.label}</label>
      <input type="number" ref={ref}></input>
    </div>
  );
});

export default OrchestrationInput;
