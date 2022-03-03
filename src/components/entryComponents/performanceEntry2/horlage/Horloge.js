import { useState, useEffect } from "react";
import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./Horloge.module.css";

const Horloge = (props) => {
  const [date, setDate] = useState("");
  const [startHours, setStartHours] = useState("");
  const [startMinutes, setStartMinutes] = useState("");
  const [endHours, setEndHours] = useState("");
  const [endMinutes, setEndMinutes] = useState("");

  const label = props.label;
  const event = props.event;
  const newlySavedShow = props.newlySavedShow;

  useEffect(() => {
    const sendUpHorloge = async () => {
      const horlogeToSend = {
        show: newlySavedShow,
        date: date,
        event: event,
        startTime: [startHours, startMinutes],
        endTime: [endHours, endMinutes],
      };

      // let response = await PushBasic(horlogeToSend, "add-horloge");
      // if (response.ok) {
      //   let printAnswer = await response.json();
      //   console.log(printAnswer);
      // }

      console.log(horlogeToSend);
    };

    if (newlySavedShow) {
      sendUpHorloge();
    }
  }, [newlySavedShow]);

  const dateSetter = (event) => {
    setDate(event.target.value);
  };

  const startHoursSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    setStartHours(+event.target.value);
    if (startHours != '') {
      setStartMinutes(0)
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
    setEndHours(+event.target.value)
  };

  const endMinutesSetter = (event) => {};

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={classes.bothTimesHolder}>
          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>Start Time</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                onChange={startHoursSetter}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
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
                onChange={endHoursSetter}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
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

export default Horloge;
