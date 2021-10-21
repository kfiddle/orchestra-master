import classes from "./InputDate.module.css";

const InputDateTime = (props) => {
  const { label, index, datePopulator, pObject, style } = props.inputObject;
  let dateTime = { date: "", startTime: "", endTime: "" };

  // const placeHolder = pObject[key];

  const localPopulator = (event, key) => {
    dateTime[key] = event.target.value;
    datePopulator(index, dateTime);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`} style={style}>
        <label>{label}</label>
        <input
          type={"date"}
          onChange={(event) => localPopulator(event, "date")}
          // placeholder={placeHolder}
          style={style}
        ></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>Start Time</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "startTime")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input type={"text"} style={{ width: "6rem" }}></input>
          </div>
        </div>

        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>End Time?</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              onChange={(event) => localPopulator(event, "endTime")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input type={"text"} style={{ width: "6rem" }}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDateTime;
