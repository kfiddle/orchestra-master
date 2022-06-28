import { useState } from "react";

import OrchInput from "./orchInput/OrchInput";
import styles from "./Family.module.css";
import InstNum from "./instNum/InstNum";

const Family = (props) => {
  const [shownInput, setShownInput] = useState([]);
  const [specialClicked, setSpecialClicked] = useState(false);
  const familyName = props.family;
  const insts = props.insts;

  const showNumber = () => {
    if (shownInput.length > 3 && !specialClicked) {
      setSpecialClicked(true);
    } else {
      setSpecialClicked(false);
    }
  };

  const displayableButtons = [];
  let whichInst = 0;

  for (let j = 0; j < shownInput.length; j++) {
    if (shownInput[j + 1] === "a") {
      displayableButtons.push(
        <InstNum
          key={Math.random()}
          instNum={shownInput[j]}
          familyName={familyName}
          inst={insts[whichInst]}
          specialDesignate={"a"}
        />
      );
      whichInst = j + 1;
      j = j + 1;
    } else {
      displayableButtons.push(
        <InstNum
          key={Math.random()}
          instNum={shownInput[j]}
          familyName={familyName}
          inst={insts[whichInst]}
          specialDesignate={null}
        />
      );
      whichInst = whichInst + 1;
    }
  }

  return (
    <div className={styles.familyDiv}>
      <label className={styles.label} onClick={showNumber}>
        {familyName}
      </label>
      <OrchInput shownInput={shownInput} inputSetter={setShownInput} />
      {specialClicked && <div className={styles.buttonsDiv}>{displayableButtons}</div>}
    </div>
  );
};

export default Family;
