import { useState } from "react";
import DoublingBox from "./doublingBox/DoublingBox";
import styles from "./InstrumentButton.module.css";

const InstrumentButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);

  const instrument = props.instrument;
  const rank = props.rank;
  const doublingOptions = props.doublingOptions;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  return (
    <div>
      <button className={styles.button} onClick={showDoublings}>
        {instrument} {rank}
      </button>
      {doublingsClicked && <DoublingBox doublingOptions={doublingOptions} />}
    </div>
  );
};

export default InstrumentButton;
