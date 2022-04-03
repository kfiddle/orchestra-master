import { useState, useEffect, useContext } from "react";

import { ShowEditsSubmitted } from "../../../../store/submit-clicked";
import PerformanceToEdit from "../../../../store/performance-to-edit";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./Horloge.module.css";

const HorlogeAddTo = (props) => {
  const [date, setDate] = useState("");
  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);

  const { showEditsSubmitted, setShowEditsSubmitted } =
    useContext(ShowEditsSubmitted);
  const { performance } = useContext(PerformanceToEdit);

  const label = props.label;
  const event = props.event;

  useEffect(() => {
    const sendUpHorloge = async () => {
      let startTimeToSend =
        startHours === 0 ? null : [startHours, startMinutes];

      let endTimeToSend = endHours === 0 ? null : [endHours, endMinutes];

      const horlogeToSend = {
        show: performance,
        date: date,
        event: event,
        startTime: startTimeToSend,
        endTime: endTimeToSend,
      };

      if (horlogeToSend.date === "") {
        return;
      } else {
        let response = await PushBasic(horlogeToSend, "add-horloge");
        if (response.ok) {
          let printAnswer = await response.json();
        }
      }
    };

    if (showEditsSubmitted) {
      sendUpHorloge();
    }
  }, [showEditsSubmitted]);

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
      <div className={classes.extraDiv}></div>
    </div>
  );
};

export default HorlogeAddTo;
