import { useState } from "react";

import OrchInput from "./orchInput/OrchInput";
import styles from "./Family.module.css";
import InstNum from "./instNum/InstNum";

const Family = (props) => {
  const [shownInput, setShownInput] = useState([]);
  const [specialClicked, setSpecialClicked] = useState(false);
  const familyName = props.family;

  const showNumber = () => {
    if (shownInput.length > 3) {
      setSpecialClicked(true);
    }
  };

  const displayableButtons = [];

  for (let instNum of showNumber) {

    displayableButtons.push(<InstNum key={Math.random()} instNum={instNum} familyName={familyName} />);
  

}


  return (
    <div className={styles.familyDiv}>
      <label className={styles.label} onClick={showNumber}>
        {familyName}
      </label>
      <OrchInput shownInput={shownInput} inputSetter={setShownInput} />
      {specialClicked && displayableButtons}
    </div>
  );
};

export default Family;
