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
          onChange={(event) => datePopulator(event, index)}
          // placeholder={placeHolder}
          style={style}
        ></input>
      </div>

      <div className={`${classes.control} ${classes.timeDiv}`}>
        <label>Start Time</label>
        <input type={"text"}></input>
      </div>

      <div className={`${classes.control} ${classes.timeDiv}`}>
        <label>End Time?</label>
        <input type={"text"}></input>
      </div>
    </div>
  );
};

export default InputDateTime;
