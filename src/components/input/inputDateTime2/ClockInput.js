import { useState } from "react";

import classes from "./ClockInput.module.css";

const ClockInput = (props) => {
  const [localHours, setLocalHours] = useState("");
  const [localMinutes, setLocalMinutes] = useState("");

  const label = props.label;
  const timeString = props.time;
  const randomListToTry = props.randomListToTry;

  const hours =
    timeString[0] === "0" ? timeString[1] : timeString[0] + timeString[1];
  const minutes = timeString[3] + timeString[4];

  const hoursSetter = (event) => {
    setLocalHours(event.target.value);
    randomListToTry.push(localHours);
  };

  const minutesSetter = (event) => {
    setLocalMinutes(event.target.value);
  };

  return (
    <div className={`${classes.control} ${classes.timeDiv}`}>
      <label>{label}</label>
      <div className={classes.hoursMinutesHolder}>
        <input
          className={classes.hoursInput}
          type={"text"}
          placeholder={hours}
          onChange={hoursSetter}
        ></input>
        <input
          className={classes.minutesInput}
          type={"text"}
          placeholder={minutes}
          onChange={minutesSetter}
        ></input>
      </div>
    </div>
  );
};

export default ClockInput;
