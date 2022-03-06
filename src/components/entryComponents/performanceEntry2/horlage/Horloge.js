import { useState, useEffect, useContext } from "react";
import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import NewlySavedShow from "../../../../store/newly-saved-show";
import usePrintTime from "../../../../hooks/usePrintTime";

import classes from "./Horloge.module.css";
import useTimeFormatter from "../../../../hooks/useTimeFormatter";
import useInitialTimeNums from "../../../../hooks/useInitialTimeNums";

const Horloge = (props) => {
  const preHorloge = props.horloge;

  const [startingHours, startingMinutes, endingHours, endingMinutes] =
    useInitialTimeNums(preHorloge ? preHorloge : null);

  const [date, setDate] = useState(preHorloge ? preHorloge.date : "");
  const [startHours, setStartHours] = useState(startingHours);
  const [startMinutes, setStartMinutes] = useState(startingMinutes);
  const [endHours, setEndHours] = useState(endingHours);
  const [endMinutes, setEndMinutes] = useState(endingMinutes);

  const { newlySavedShow } = useContext(NewlySavedShow);

  const label = props.label;
  const event = props.event;

  useEffect(() => {
    const sendUpHorloge = async () => {
      let startTimeToSend =
        startHours === 0 ? null : [startHours, startMinutes];

      let endTimeToSend = endHours === 0 ? null : [endHours, endMinutes];

      const horlogeToSend = {
        show: newlySavedShow,
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

  const [printedStartHours, printedStartMinutes] = usePrintTime(
    startHours,
    startMinutes
  );
  const [printedEndHours, printedEndMinutes] = usePrintTime(
    endHours,
    endMinutes
  );

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
                defaultValue={printedStartHours}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={startMinutesSetter}
                defaultValue={printedStartMinutes}
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
                defaultValue={printedEndHours}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={endMinutesSetter}
                defaultValue={printedEndMinutes}
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
