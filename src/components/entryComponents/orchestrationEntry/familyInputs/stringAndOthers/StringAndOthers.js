import { useState } from "react";

import classes from "./StringAndOthers.module.css";

const StringAndOthers = (props) => {
  const [stringsChecked, setStringsChecked] = props.stringsStateStuff;

  const setStrings = (event) => {
    setStringsChecked((previous) => !previous);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.label}>Full Strings?</div>
      <input
        type={"checkBox"}
        className={classes.checkBox}
        checked={stringsChecked}
        onChange={setStrings}
      ></input>

      <div className={classes.label}>Custom</div>
      <input type={"checkBox"} className={classes.checkBox}></input>

      {/* <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
      ></input> */}

      <button className={classes.extrasButton}>Extras</button>
    </div>
  );
};

export default StringAndOthers;
