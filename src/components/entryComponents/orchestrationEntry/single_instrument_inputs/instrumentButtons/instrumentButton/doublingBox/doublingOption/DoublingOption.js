import { useState } from "react";
import styles from "./DoublingOption.module.css";

const DoublingOption = (props) => {
  const [clickedInstrument, setClickedInstrument] = useState(false);


  const instrumentName = props.instrumentName;

  const clickedInstrumentHandler = () => {
    props.activeOption(instrumentName);
  };

  let classNames = !clickedInstrument
    ? styles.outerContainer
    : `${styles.outerContainer} ${styles.clicked}`;

  return (
    <div className={classNames} onClick={clickedInstrumentHandler}>
      {instrumentName}
    </div>
  );
};

export default DoublingOption;
