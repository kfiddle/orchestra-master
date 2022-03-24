import { useState } from "react";

import styles from "./DoublingOption.module.css";

const DoublingOption = (props) => {
  const [clickedInstrument, setClickedInstrument] = useState(false);

  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const index = props.optionIndex;

  const part = props.part;

  const clickedInstrumentHandler = () => {
    setClickedInstrument((previous) => !previous);
    console.log(primaryPart + "    " + rank + " doubling on " + part);
  };

  let classNames = !clickedInstrument
    ? styles.outerContainer
    : `${styles.outerContainer} ${styles.clicked}`;

  return (
    <div className={classNames} onClick={clickedInstrumentHandler}>
      {part}
    </div>
  );
};

export default DoublingOption;
