import { useState, useEffect } from "react";

import classes from "./ClockInput.module.css";

const ClockInput = (props) => {
  const [hours, minutes] = props.time;
  const submitting = props.submitting;
  const gatherTimes = props.gatherTimes;
  const label = props.label;
  const index = props.index;

  const printedLabel = label === 'startTime'? 'Start Time': 'End Time'

  const [localTime, setLocalTime] = useState([hours, minutes]);

  useEffect(() => {
    if (submitting) {
      gatherTimes(localTime, label);
    }
  }, [submitting]);

  const hoursSetter = (event) => {
    setLocalTime([+event.target.value, localTime[1]]);
  };

  const minutesSetter = (event) => {
    setLocalTime([localTime[0], +event.target.value]);
    console.log(localTime[1]);
  };

  let displayableMinutes = "";

  if (localTime[0] > 0) {
    if (localTime[1] === 0) {
      displayableMinutes = "00";
    } else if (localTime[1] < 10) {
      displayableMinutes = "0" + localTime[1].toString();
    } else {
      displayableMinutes = localTime[1];
    }
  }

  return (
    <div className={`${classes.control} ${classes.timeDiv}`}>
      <label>{printedLabel}</label>
      <div className={classes.hoursMinutesHolder}>
        <input
          className={classes.hoursInput}
          onChange={hoursSetter}
          value={localTime[0] > 0 ? localTime[0] : ""}
        ></input>

        <input
          className={classes.minutesInput}
          type={"text"}
          onChange={minutesSetter}
          value={displayableMinutes}
        ></input>
      </div>
    </div>
  );
};

export default ClockInput;
