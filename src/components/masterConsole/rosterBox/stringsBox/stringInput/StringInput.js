import { useState, useEffect } from "react";

import classes from "./StringInput.module.css";

const StringInput = (props) => {
  const [localNumber, setLocalNumber] = useState();

  const part = props.part;
  const submitted = props.submitted;

  useEffect(() => {


  }, [submitted])

  const inputNumber = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }
    setLocalNumber(event.target.value);
  };

  return (
    <div className={`${classes.control} ${classes.outerContainer}`}>
      <label>{part}</label>
      <input
        className={classes.control}
        type="text"
        onChange={inputNumber}
      ></input>
    </div>
  );
};

export default StringInput;
