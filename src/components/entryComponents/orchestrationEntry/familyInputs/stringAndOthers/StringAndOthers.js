import { useState } from "react";
import ExtrasButton from "./extrasButton/ExtrasButton";

import classes from "./StringAndOthers.module.css";

const StringAndOthers = (props) => {
  const [stringsChecked, setStringsChecked] = props.stringsStateStuff;
  const extrasStateStuff = props.extrasStateStuff;
  const extrasClicker = props.extrasClicker;

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

      <ExtrasButton extrasStateStuff={extrasStateStuff} extrasClicker={extrasClicker} />
    </div>
  );
};

export default StringAndOthers;
