import { useState } from "react";
import useTimeFormatter from "../../../hooks/useTimeFormatter";
import ClockInput from "./ClockInput";

import classes from "./InputDateTime2.module.css";

// let localDateTime = { date: "", startTime: [0, 0], endTime: [0, 0] };

const InputDateTime2 = (props) => {
  const dateTime = props.dateTime;
  const { date, startTime, endTime } = dateTime;
  const [localDate, setLocalDate] = useState(date);

  const label = props.label;
  const index = props.index;

  const submitting = props.submitting;
  const sendUpTime = props.sendUpTime;

  const dateTimeSetters = props.dateTimeSetters;
  const [dateTimes, setDateTimes] = dateTimeSetters;

  console.log(props.dateTime);

  const [startHours, startMinutes] = useTimeFormatter(startTime);
  const [endHours, endMinutes] = useTimeFormatter(endTime);

  const dateSetter = (event) => {
   setLocalDate(event.target.value)
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <ClockInput
          label="Start Time"
          time={[startHours, startMinutes]}
          index={index}
          submitting={submitting}
          sendUpTime={sendUpTime}
        />
        <ClockInput
          label="End Time"
          time={[endHours, endMinutes]}
          index={index}
          submitting={submitting}
          sendUpTime={sendUpTime}
        />
      </div>
    </div>
  );
};

export default InputDateTime2;
