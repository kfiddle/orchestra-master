import classes from "./InputDate.module.css";

const InputDateTime = (props) => {
  const { label, index, datePopulator, pObject, style } = props.inputObject;

  // const placeHolder = pObject[key];

  return (
    <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`} style={style}>
        <label>{label}</label>
        <input
          type={"date"}
          onChange={(event) => datePopulator(event, index, "date")}
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
              onChange={(event) => datePopulator(event, index, "startTime")}
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
              onChange={(event) => datePopulator(event, index, "endTime")}
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
