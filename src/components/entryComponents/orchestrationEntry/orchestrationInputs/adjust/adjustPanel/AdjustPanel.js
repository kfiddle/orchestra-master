import ExtrasButton from "../extras/ExtrasButton";
import InstrumentButton from "../instrumentButton/InstrumentButton";

import styles from "./AdjustPanel.module.css";

const doublingObject = {
  FLUTE: ["PICCOLO", 'ALTOFLUTE'],
  OBOE: ["ENGLISHHORN"],
  CLARINET: ["EBCLARINET", 'BASSCLARINET'],
  BASSOON: ["CONTRA"],
  HORN: [""],
  TRUMPET: [""],
};

const AdjustPanel = (props) => {
  const basicNumbers = props.number;

  const instruments = {
    FLUTE: +basicNumbers[0],
    OBOE: +basicNumbers[1],
    CLARINET: +basicNumbers[2],
    BASSOON: +basicNumbers[3],
  };

  const instrumentsToShow = [];

  for (let instrument in instruments) {
    for (let i = 1; i <= instruments[instrument]; i++) {
      instrumentsToShow.push(
        <InstrumentButton
          key={Math.random()}
          instrument={instrument}
          rank={i}
          doublingOptions={doublingObject[instrument]}
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
