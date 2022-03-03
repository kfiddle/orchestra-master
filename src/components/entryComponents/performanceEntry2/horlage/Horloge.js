import { useState, useEffect } from "react";
import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./Horloge.module.css";

const Horloge = (props) => {
  const [horloge, setHorloge] = useState({
    date: "",
    startHours: "",
    startMinutes: "",
    endHours: "",
    endMinutes: "",
  });

  const label = props.label;
  const index = props.index;

  const newlySavedShow = props.newlySavedShow;
  console.log(newlySavedShow);

  useEffect(() => {
    const sendUpHorloge = async () => {
      let startTime = [
        horloge.startHours ? horloge.startHours : null,
        horloge.startMinutes ? horloge.startMinutes : null,
      ];
      let endTime = [
        horloge.endHours ? horloge.endHours : null,
        horloge.endMinutes ? horloge.endMinutes : null,
      ];

      const horlogeToSend = {
        show: newlySavedShow,
        date: horloge.date,
        startTime: [8, 0],
        endTime: [10, 0],
      };

      let response = await PushBasic(horlogeToSend, "add-horloge");
      if (response.ok) {
        let printAnswer = await response.json();
        console.log(printAnswer);
      }
    };

    if (newlySavedShow) {
      sendUpHorloge();
    }
  }, [newlySavedShow]);

  const dateSetter = (event) => {
    setHorloge({ ...horloge, date: event.target.value });
  };

  const timeSetter = (event, keyName) => {
    setHorloge({ ...horloge, [keyName]: [+event.target.value] });
  };

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
                onChange={(event) => timeSetter(event, "startHours")}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={(event) => timeSetter(event, "startMinutes")}
                style={{ width: "6rem" }}
              ></input>
            </div>
          </div>

          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>End Time?</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                onChange={(event) => timeSetter(event, "endHours")}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={(event) => timeSetter(event, "endMinutes")}
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
