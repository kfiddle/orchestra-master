import { useState } from "react";

import classes from "./StringsBox.module.css";

const StringsBox = (props) => {
  const [stringsChecked, setStringsChecked] = useState(true);


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
    </div>
  );
};

export default StringsBox;
