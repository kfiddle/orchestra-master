import { useState } from "react";

import styles from "./MinutesInput.module.css";

const MinutesInput = (props) => {
  const hasHour = props.hasHour;
  let minutes = "";

  //   let minutes = "";

  if (props.hasHour) {
    if (parseInt(minutes) === 0) {
      minutes = "00";
    } else if (parseInt(minutes) < 10) {
      minutes = "0" + minutes.toString();
    } else {
      minutes = props.minutes;
    }
  }

  const [localMinutes, setLocalMinutes] = useState(minutes);

  const minutesSetter = (event) => {
    console.log(localMinutes);
    setLocalMinutes(event.target.value);
  };

  return (
    <input
      className={styles.minutesInput}
      type={"text"}
      onChange={minutesSetter}
      value={hasHour ? localMinutes : ""}
    ></input>
  );
};

export default MinutesInput;
