import { useEffect, useState } from "react";
import styles from "./DoublingOption.module.css";

const DoublingOption = (props) => {
  const [clickedInstrument, setClickedInstrument] = useState(false);

  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const index = props.optionIndex;
  const partObject = props.partObject;
  const setter = props.setter;
  const allParts = props.allParts;

  console.log(allParts);

  const clickedInstrumentHandler = () => {
    let currentActive = partObject.active;

    let tempParts = allParts;

    console.log("and the specific one at index " + index);
    console.log({ ...tempParts[primaryPart]});

    // console.log({ ...tempParts[primaryPart][rank - 1] });

    tempParts[primaryPart][rank - 1].doublesObjects[index].active =
      !currentActive;
    setter(tempParts);
  };
    // setClickedInstrument((previous) => !previous);


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
