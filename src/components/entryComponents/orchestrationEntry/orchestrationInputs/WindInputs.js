import { Fragment, useState } from "react";

import AdjustButton from "./adjust/adjustButton/AdjustButton";
import ExtrasButton from "./adjust/extras/ExtrasButton";

import AdjustPanel from "./adjust/adjustPanel/AdjustPanel";
import classes from "./OrchestrationInputs.module.css";

const WindInputs = (props) => {
  const [orchestration, setOrchestration] = props.stateList;
  const [adjustClicked, setAdjustClicked] = useState(false);
  const [basicNumbers, setBasicNumbers] = useState("");

  const setANumber = (event, key) => {
    setOrchestration({ ...orchestration, [key]: event.target.value });
  };

  const panelClickHandler = () => {
    if (basicNumbers.length === 4) {
      setAdjustClicked(true);
    } else {
    }
  };

  const enterNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 5) {
      return;
    }
    setBasicNumbers(event.target.value);
    setAdjustClicked(false)
  };

  return (
    <Fragment>
      <div
        className={`${classes.windsOuter} ${classes.outerContainer}`}
        onClick={panelClickHandler}
      >
        <div className={classes.label}>Winds</div>

        <input
          type={"text"}
          className={`${classes.input} ${classes.winds}`}
          onChange={enterNumber}
          value={basicNumbers}
        ></input>
      </div>
      {adjustClicked && <AdjustPanel number={basicNumbers} />}
    </Fragment>
  );
};

export default WindInputs;
