import { useState, useEffect } from "react";

import classes from "./ClockInput.module.css";

const ClockInput = (props) => {
  const timeString = props.time;
  console.log(timeString)

  //   const hours =
  //     timeString[0] === "0" ? timeString[1] : timeString[0] + timeString[1];
  //   const minutes = timeString[3] + timeString[4];

  const [localTime, setLocalTime] = useState([+timeString[1], +timeString[3]]);

  const submitting = props.submitting;
  const sendUpTime = props.sendUpTime;

  const label = props.label;
  const index = props.index;

  useEffect(() => {
    if (submitting) {
      sendUpTime(localTime, index);
    }
  }, [submitting]);

  const hoursSetter = (event) => {
    setLocalTime([+event.target.value, localTime[1]]);
    console.log(localTime[0]);
  };

  const minutesSetter = (event) => {
    setLocalTime([localTime[0], +event.target.value]);
  };

  return (
    <div className={`${classes.control} ${classes.timeDiv}`}>
      <label>{label}</label>
      <div className={classes.hoursMinutesHolder}>
        <input
          className={classes.hoursInput}
          onChange={hoursSetter}
          value={localTime[0]}
        ></input>
        <input
          className={classes.minutesInput}
          type={"text"}
          onChange={minutesSetter}
          value={localTime[1] === 0? '00': localTime[1]}
        ></input>
      </div>
    </div>
  );
};

export default ClockInput;
