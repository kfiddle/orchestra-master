

import useTimeFormatter from '../../../hooks/useTimeFormatter';

import classes from './InputDateTime2.module.css';

const InputDateTime2 = (props) => {
  const performance = props.performance;
  const setPerformance = props.setPerformance;
  const {date, startTime, endTime} = props.dateTime;

  const [hours, minutes] = useTimeFormatter(startTime);
  const [endHours, endMinutes] = useTimeFormatter(endTime);

  console.log(endMinutes);


  return (
  <div className={classes.outerContainer}>
      <div className={`${classes.control} ${classes.dateDiv}`}>
        {/* <label>{label}</label> */}
        <input
          type={"date"}
        //   onChange={(event) => localPopulator(event, "date")}
          defaultValue={date}
        ></input>
      </div>

      <div className={classes.bothTimesHolder}>
        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>Start Time</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
              defaultValue={hours}
            //   onChange={(event) => localPopulator(event, "startTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              defaultValue={endHours}

            //   onChange={(event) => localPopulator(event, "startTime", "minute")}
            defaultValue={minutes}

              style={{ width: "6rem" }}
            ></input>
          </div>
        </div>

        <div className={`${classes.control} ${classes.timeDiv}`}>
          <label>End Time?</label>
          <div className={classes.hoursMinutesHolder}>
            <input
              type={"text"}
            //   onChange={(event) => localPopulator(event, "endTime", "hour")}
              style={{ width: "4rem", marginRight: ".5rem" }}
            ></input>
            <input
              type={"text"}
              defaultValue={endMinutes}
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
