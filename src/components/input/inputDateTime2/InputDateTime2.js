import useTimeFormatter from "../../../hooks/useTimeFormatter";
import ClockInput from "./ClockInput";

import classes from "./InputDateTime2.module.css";

let localDateTime = { date: "", startTime: [0, 0], endTime: [0, 0] };

const InputDateTime2 = (props) => {
  const label = props.label;
  const index = props.index;
  const randomListToTry = props.randomListToTry;

  const [dateTimes, setDateTimes] = props.dateTimeSetters;

  const dateTime = props.dateTime;
  const { date, startTime, endTime } = dateTime;
  console.log(props.dateTime);

  const [startHours, startMinutes] = useTimeFormatter(startTime);
  const [endHours, endMinutes] = useTimeFormatter(endTime);

  const dateSetter = (event) => {
    let dateTimeToChange = dateTime;
    dateTimeToChange = { ...dateTimeToChange, date: event.target.value };
    dateTimes[index] = dateTimeToChange;
    setDateTimes(dateTimes);
  };

  // const checkForDelete = (event) => {
  //   if (
  //     event.code === "Backspace" &&
  //     foneNumber[foneNumber.length - 1] === "-"
  //   ) {
  //     setFoneNumber((previous) => previous.slice(0, -1));
  //   }
  // };

  // const localPopulator = (event, key, clockHand) => {
  //   if (key === "date") {
  //     dateTime[key] = event.target.value;
  //   } else {
  //     clockHand === "hour"
  //       ? (dateTime[key][0] = parseInt(event.target.value))
  //       : (dateTime[key][1] = parseInt(event.target.value));
  //   }
  //   datePopulator(index, dateTime);
  // };

  const startHourSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 2) {
      return;
    }
    let dateTimeToChange = dateTime;
    dateTimeToChange = {
      ...dateTimeToChange,
      startTime: event.target.value,
      // startTime: [+event.target.value, dateTimeToChange.startTime[1]],
    };
    console.log(dateTimeToChange);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <ClockInput label="Crazy" time={startTime} randomListToTry={randomListToTry} />

        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>Start Time</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              placeholder={startHours}
              onChange={startHourSetter}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              placeholder={startMinutes}
              //   onChange={(event) => localPopulator(event, "startTime", "minute")}
              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>

        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>End Time?</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              placeholder={endHours}
              //   onChange={(event) => localPopulator(event, "endTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              placeholder={endMinutes}
              //   onChange={(event) => localPopulator(event, "endTime", "minute")}
              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDateTime2;
