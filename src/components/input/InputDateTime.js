import useTimeFormatter from "../../hooks/useTimeFormatter";
import classes from "./InputDate.module.css";

const InputDateTime = (props) => {
  const { label, index, datePopulator, pObject, style } = props.inputObject;
  let dateTime = { date: "", startTime: [0, 0], endTime: [0, 0] };

  let primaryDate = pObject.performanceDates? pObject.performanceDates[0].date: null;

  const localPopulator = (event, key, clockHand) => {
    if (key === "date") {
      dateTime[key] = event.target.value;
    } else {
      clockHand === "hour"
        ? (dateTime[key][0] = parseInt(event.target.value))
        : (dateTime[key][1] = parseInt(event.target.value));
    }
    datePopulator(index, dateTime);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`} style={style}>
        <label>{label}</label>
        <input
          type={"date"}
          onChange={(event) => localPopulator(event, "date")}
          placeholder={primaryDate}
          defaultValue={primaryDate}
          style={style}
        ></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>Start Time</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "startTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "startTime", "minute")}
              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>

        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>End Time?</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "endTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "endTime", "minute")}
              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDateTime;
