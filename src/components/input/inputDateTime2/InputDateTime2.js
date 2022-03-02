import { useState } from "react";
import useTimeFormatter from "../../../hooks/useTimeFormatter";
import ClockInput from "./ClockInput";

import classes from "./InputDateTime2.module.css";

// let localDateTime = { date: "", startTime: [0, 0], endTime: [0, 0] };

const InputDateTime2 = (props) => {
  const dateTime = props.dateTime;
  const { date, startTime, endTime } = dateTime;

  // const [localDate, setLocalDate] = useState(date);
  const [localDatetime, setLocalDateTime] = useState({});

  const label = props.label;
  const index = props.index;

  const submitting = props.submitting;
  const sendUpTime = props.sendUpTime;

  const [startHours, startMinutes] = useTimeFormatter(startTime);
  const [endHours, endMinutes] = useTimeFormatter(endTime);

  const dateSetter = (event) => {
    setLocalDateTime({ ...localDatetime, date: event.target.value });
  };

  const gatherTimes = (times, label) => {
    let tempDateTime = localDatetime;
    tempDateTime[label] = times;
    setLocalDateTime(tempDateTime);
    setTimeout(() => console.log(localDatetime), 1000);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <ClockInput
          label="startTime"
          time={[startHours, startMinutes]}
          index={0}
          submitting={submitting}
          gatherTimes={gatherTimes}
        />
        <ClockInput
          label="endTime"
          time={[endHours, endMinutes]}
          index={1}
          submitting={submitting}
          gatherTimes={gatherTimes}
        />
      </div>
    </div>
  );
};

export default InputDateTime2;
