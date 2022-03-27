import { useState, useEffect } from "react";

import styles from "./DoublingOption.module.css";

const DoublingOption = (props) => {
  const [clickedInstrument, setClickedInstrument] = useState(false);

  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const index = props.optionIndex;
  const [parts, setParts] = props.chairPartz;

  const part = props.part;

  const clickedInstrumentHandler = () => {
    setClickedInstrument((previous) => !previous);
  };

  useEffect(() => {
    let tempList = parts;

    if (clickedInstrument) {
      tempList.push(part);
      setParts(tempList);
    }

    if (!clickedInstrument) {
      if (tempList.includes(part)) {
        tempList.splice(tempList.indexOf(part), 1);
      }
      setParts(tempList);
    }
  }, [clickedInstrument]);

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
