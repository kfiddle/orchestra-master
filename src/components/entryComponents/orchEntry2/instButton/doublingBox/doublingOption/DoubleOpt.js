import { useState, useEffect } from "react";

import styles from "./DoublingOption.module.css";

const DoubleOpt = (props) => {
  const [parts, setParts] = props.chairPartz;
  const [classNames, setClassNames] = useState(styles.outerContainer);
  const part = props.part;

  const checkParts = () => {
    if (parts.includes(part)) {
      setClassNames(`${styles.outerContainer} ${styles.clicked}`);
    } else {
      setClassNames(styles.outerContainer);
    }
  };

  useEffect(() => {
    checkParts();
  }, [parts]);

  const clickedInstrumentHandler = () => {
    let tempList = parts;

    if (tempList.includes(part)) {
      tempList.splice(tempList.indexOf(part), 1);
    } else {
      tempList.push(part);
    }
    setParts(tempList);
    checkParts();
  };

  return (
    <div className={classNames} onClick={clickedInstrumentHandler}>
      {part}
    </div>
  );
};

export default DoubleOpt;
