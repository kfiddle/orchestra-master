import ExtrasButton from "../extras/ExtrasButton";
import InstrumentButton from "../instrumentButton/InstrumentButton";

import styles from "./AdjustPanel.module.css";

const AdjustPanel = (props) => {
  const basicNumber = props.number;

  const instruments = {
    flute: +basicNumber[0],
    oboe: +basicNumber[1],
    cln: +basicNumber[2],
    bss: +basicNumber[3],
  };

  const instrumentsToShow = [];

  for (let instrument in instruments) {
    for (let i = 1; i <= instruments[instrument]; i++) {
      instrumentsToShow.push(
        <InstrumentButton
          key={Math.random()}
          instrument={instrument}
          rank={i}
        />
      );
    }
  }

  return (
    <div className={styles.outerContainer}>
      {instrumentsToShow}
      <ExtrasButton />
    </div>
  );
};

export default AdjustPanel;
