import { useState } from "react";

import classes from "./InputDate.module.css";

let initialDateTime = { date: "", startTime: [0, 0], endTime: [0, 0] };

const InputDateTime2 = (props) => {
  const { label, index, datePopulator, style } = props.inputObject;
  const [dateTime, setDateTime] = useState(initialDateTime);

  const localPopulator = (event, key, clockHand) => {
    let tempDateTime = { ...dateTime };
    if (key === "date") {
      tempDateTime[key] = event.target.value;
    } else {
      clockHand === "hour"
        ? (tempDateTime[key][0] = parseInt(event.target.value))
        : (tempDateTime[key][1] = parseInt(event.target.value));
    }
    setDateTime(tempDateTime);
    datePopulator(index, dateTime);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`} style={style}>
        <label>{label}</label>
        <input
          type={"date"}
          onChange={(event) => localPopulator(event, "date")}
          // placeholder={placeHolder}
          style={style}
        ></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>Start Time</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "startTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "startTime", "minute")}
              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>

        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>End Time?</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "endTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "endTime", "minute")}
              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDateTime2;
