import useTimeFormatter from "../../../hooks/useTimeFormatter";
import ClockInput from "./ClockInput";

import classes from "./InputDateTime2.module.css";

let localDateTime = { date: "", startTime: [0, 0], endTime: [0, 0] };

const InputDateTime2 = (props) => {
  const label = props.label;
  const index = props.index;

  const submitting = props.submitting;
  const sendUpTime = props.sendUpTime;

  const dateTimeSetters = props.dateTimeSetters;
  const [dateTimes, setDateTimes] = dateTimeSetters;

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

 

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label>{label}</label>
        <input type={"date"} onChange={dateSetter} defaultValue={date}></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <ClockInput
          label="Start Time"
          time={startTime}
          dateTimeSetters={dateTimeSetters}
          index={index}
          submitting={submitting}
          sendUpTime={sendUpTime}
        />
        <ClockInput
          label="End Time"
          time={startTime}
          dateTimeSetters={dateTimeSetters}
          index={index}
          submitting={submitting}
          sendUpTime={sendUpTime}
        />
      </div>
    </div>
  );
};

export default InputDateTime2;
