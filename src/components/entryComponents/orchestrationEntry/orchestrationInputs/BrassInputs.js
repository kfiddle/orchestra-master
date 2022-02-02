import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import AdjustPanel from "./adjust/adjustPanel/AdjustPanel";

import classes from "./OrchestrationInputs.module.css";

const BrassInputs = (props) => {
  const [basicNumbers, setBasicNumbers] = useState("");
  const [orchestration, setOrchestration] = props.stateList;

  const clickedFamily = props.clicked;

  // const setANumber = (event, key) => {
  //   setOrchestration({ ...orchestration, [key]: event.target.value });
  // };

  const panelClickHandler = () => {
    if (basicNumbers.length === 4) {
      props.clickHandler("brass");
    }
  };

  const enterNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 5) {
      return;
    }
    setBasicNumbers(event.target.value);
  };

  let classNames = `${classes.brassOuter} ${classes.outerContainer}`;

  if (clickedFamily === "brass") {
    classNames = `${classes.brassOuter} ${classes.outerContainer} ${classes.panelIsOpen}`;
  }

  return (
    <Fragment>
      <div className={classNames} onClick={panelClickHandler}>
        <div className={classes.label}>Brass</div>
        <input
          type={"text"}
          className={`${classes.input} ${classes.brass}`}
          onChange={enterNumber}
          value={basicNumbers}
        ></input>
      </div>

      {clickedFamily === "brass" && (
        <AdjustPanel number={basicNumbers} family={"brass"} />
      )}
    </Fragment>
  );
};

export default BrassInputs;
