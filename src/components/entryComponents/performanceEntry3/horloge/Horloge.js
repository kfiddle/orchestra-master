import { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import DatePicker from "react-datepicker";

import NewlySavedShow from "../../../../store/newly-saved-show";

import useFetch from "../../../../hooks/useFetch";

import PerformanceToEdit from "../../../../store/performance-to-edit";

import classes from "./Horloge.module.css";

const Horloge = ({ label, event, deleter, index }) => {
  const [date, setDate] = useState("");

  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);

  const { newlySavedShow } = useContext(NewlySavedShow);
  const { performance } = useContext(PerformanceToEdit);

  const pusher = useFetch();

  useEffect(() => {
    const sendUpHorloge = async (show) => {
      let startTimeToSend =
        startHours === 0 ? null : [startHours, startMinutes];

      let endTimeToSend = endHours === 0 ? null : [endHours, endMinutes];

      const horlogeToSend = {
        show: show,
        date: date,
        event: event,
        startTime: startTimeToSend,
        endTime: endTimeToSend,
      };

      if (horlogeToSend.date === "") {
        return;
      } else {
        let response = await pusher(horlogeToSend, "add-horloge");
        if (response !== "phoey") {
          let printAnswer = response;
        }
      }
    };

    if (newlySavedShow) {
      sendUpHorloge(newlySavedShow);
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

  const deleteService = () => deleter(index);

  // <AiOutlineClose className={classes.xIcon} onClick={deleteService} />

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} className={date==='' ? classes.dateInput : ''} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={classes.bothTimesHolder}>
          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>Start</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                onChange={startHoursSetter}
                style={{ width: "3rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={startMinutesSetter}
                style={{ width: "3rem" }}
              ></input>
            </div>
          </div>

          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>End?</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                onChange={endHoursSetter}
                style={{ width: "3rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={endMinutesSetter}
                style={{ width: "3rem" }}
              ></input>
            </div>
          </div>
          <div className={`${classes.control} ${classes.locationDiv}`}>
            <label>Location</label>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horloge;
