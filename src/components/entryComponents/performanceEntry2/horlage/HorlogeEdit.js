import { useEffect, useState } from "react";

import classes from "./Horloge.module.css";

const HorlogeEdit = (props) => {
  const horloge = props.horloge;
  const label = props.label;
  const event = horloge.event;

  const getHour = (timeString) => {
    if (!timeString) {
      return 0;
    } else if (timeString[0] === "0") {
      return +timeString[1];
    } else {
      return parseInt(timeString[0] + timeString[1]);
    }
  };

  const getMinutes = (timeString) => {
    if (!timeString) {
      return 0;
    } else {
      return parseInt(timeString[3] + timeString[4]);
    }
  };


  const [date, setDate] = useState(horloge.date);
  const [startHours, setStartHours] = useState(getHour(horloge.startTime));
  const [startMinutes, setStartMinutes] = useState(
    getMinutes(horloge.startTime)
  );
  const [endHours, setEndHours] = useState(getHour(horloge.endTime));
  const [endMinutes, setEndMinutes] = useState(getMinutes(horloge.endTime));


// useEffect(() => {


// })




  const defaultTime = (hours, minutes) => {
    if (hours === 0) {
      return ["", ""];
    } else if (minutes < 10) {
      return [hours, "0" + minutes];
    } else {
      return [hours, minutes];
    }
  };

  const defaultStart = defaultTime(startHours, startMinutes);
  const defaultEnd = defaultTime(endHours, endMinutes);

  const dateSetter = (event) => {
    setDate(event.target.value);
  };

  const startHoursSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    setStartHours(+event.target.value);
    if (startHours != "") {
      setStartMinutes(0);
    }
  };

  const startMinutesSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    setStartMinutes(+event.target.value);
  };

  const endHoursSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    setEndHours(+event.target.value);
  };

  const endMinutesSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    setEndMinutes(+event.target.value);
  };


  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={classes.bothTimesHolder}>
          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>Start Time</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                defaultValue={defaultStart[0]}
                onChange={startHoursSetter}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                defaultValue={defaultStart[1]}
                onChange={startMinutesSetter}
                style={{ width: "6rem" }}
              ></input>
            </div>
          </div>

          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>End Time?</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                defaultValue={defaultEnd[0]}
                onChange={endHoursSetter}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                defaultValue={defaultEnd[1]}
                onChange={endMinutesSetter}
                style={{ width: "6rem" }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorlogeEdit;
