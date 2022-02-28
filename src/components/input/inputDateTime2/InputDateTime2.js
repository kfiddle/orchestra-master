import useTimeFormatter from "../../../hooks/useTimeFormatter";

import classes from "./InputDateTime2.module.css";

const InputDateTime2 = (props) => {
  const performance = props.performance;
  const setPerformance = props.setPerformance;
  const label = props.label;
  const index = props.index;

  const { date, startTime, endTime } = props.dateTime;
  console.log(startTime)

  let dateTimeToSend = { date: "", startTime: [0, 0], endTime: [0, 0] };

  const [startHours, startMinutes] = useTimeFormatter(startTime);
  const [endHours, endMinutes] = useTimeFormatter(endTime);

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

  const dateSetter = (event) => {
    let tempDatesList = performance.performanceDates;
    let specificDateToChange = { ...tempDatesList[index] };
    specificDateToChange.date = event.target.value;
    tempDatesList[index] = specificDateToChange;
    setPerformance({ ...performance, performanceDates: tempDatesList });
  };

  const startHourSetter = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 2) {
      return;
    }
    let tempDatesList = performance.performanceDates;
    let specificDateToChange = { ...tempDatesList[index] };
    specificDateToChange.startTime = [
      parseInt(event.target.value),
      parseInt(specificDateToChange.startTime[1]),
    ];
    tempDatesList[index] = specificDateToChange;
    setPerformance({ ...performance, performanceDates: tempDatesList });
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>Start Time</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              // placeholder={startHours}
              onChange={startHourSetter}
              value={startTime}
              
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              // placeholder={startMinutes}
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
              // placeholder={endHours}
              //   onChange={(event) => localPopulator(event, "endTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              // placeholder={endMinutes}
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
