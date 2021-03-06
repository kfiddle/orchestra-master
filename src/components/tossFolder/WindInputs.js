import { Fragment, useState } from "react";

import AdjustPanel from "../entryComponents/orchestrationEntry/orchestrationInputs/adjust/adjustPanel/AdjustPanel";
import classes from "./OrchestrationInputs.module.css";

const WindInputs = (props) => {
  // const [orchestration, setOrchestration] = props.stateList;
  const [basicNumbers, setBasicNumbers] = useState("");

  const clickedFamily = props.clicked;

  // const setANumber = (event, key) => {
  //   setOrchestration({ ...orchestration, [key]: event.target.value });
  // };

  const panelClickHandler = () => {
    if (basicNumbers.length === 4) {
      props.clickHandler("winds");
    }
  };

  const enterNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 5) {
      return;
    }
    setBasicNumbers(event.target.value);
  };

  let classNames = `${classes.windsOuter} ${classes.outerContainer}`;

  if (clickedFamily === "winds") {
    classNames = `${classes.windsOuter} ${classes.outerContainer} ${classes.panelIsOpen}`;
  }

  return (
    <Fragment>
      <div className={classNames} onClick={panelClickHandler}>
        <div className={classes.label}>Winds</div>

        <input
          type={"text"}
          className={`${classes.input} ${classes.winds}`}
          onChange={enterNumber}
          value={basicNumbers}
        ></input>
      </div>
      {/* {adjustClicked && <AdjustPanel number={basicNumbers} family={"winds"} />} */}

      {clickedFamily === "winds" && (
        <AdjustPanel number={basicNumbers} family={"winds"} />
      )}
    </Fragment>
  );
};

export default WindInputs;
