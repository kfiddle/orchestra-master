import { useState } from "react";
import styles from "./DoublingOption.module.css";

const DoublingOption = (props) => {
  const [clickedInstrument, setClickedInstrument] = useState(false);

  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const key = props.key;
  const partObject = props.partObject;
  const setter = props.setter;
  const allParts = props.allParts;

  const instrumentName = props.instrumentName;

  const clickedInstrumentHandler = () => {
    console.log(partObject);
    console.log(primaryPart);
    let currentActive = partObject.active;

    setter(
      (previous) =>
        (previous[primaryPart][rank - 1].doublesObjects[key].active =
          !currentActive)
    );

    console.log(allParts)
  };

  let classNames = !clickedInstrument
    ? styles.outerContainer
    : `${styles.outerContainer} ${styles.clicked}`;

  return (
    <div className={classNames} onClick={clickedInstrumentHandler}>
      {partObject.secondaryPart}
    </div>
  );
};

export default DoublingOption;
