import { useState } from "react";
import InstrumentButtons from "./instrumentButtons/InstrumentButtons";

import styles from "./SingleInstrumentInput.module.css";

const doublingOptionsObject = {
  Flute: ["PICCOLO", "ALTOFLUTE"],
  Oboe: ["ENGLISHHORN"],
  Clarinet: ["EBCLARINET", "BASSCLARINET"],
  Bassoon: ["CONTRA"],
  Horn: [""],
  Trumpet: [""],
  Trombone: [],
  Tuba: [],
};

const SingleInstrumentInput = (props) => {
  const [primaryParts, setPrimaryParts, secondaryParts, setSecondaryParts] =
    props.stateList;
  const secondaryStateFuncs = [secondaryParts, setSecondaryParts];
  const [optionsClicked, setOptionsClicked] = useState(false);
  const instrument = props.instrument;

  const setThisInstrument = (event) => {
    let chairs = [];
    for (let j = 1; j <= event.target.value; j++) {
      let doublesObjects = [];
      for (let double of doublingOptionsObject[instrument]) {
        doublesObjects.push({ secondaryPart: double, active: false });
      }
      chairs.push({
        primaryPart: instrument,
        rank: j,
        doublesObjects: doublesObjects,
      });
    }
    setPrimaryParts({ ...primaryParts, [instrument]: chairs });
  };

  const clickHandler = () => {
    setOptionsClicked((previous) => !previous);
  };

  return (
    <div className={styles.instrumentBubble}>
      <div className={styles.labelAndClickerHolder} onClick={clickHandler}>
        {instrument}
      </div>
      <input
        type={"text"}
        className={styles.input}
        onChange={setThisInstrument}
      ></input>
      {optionsClicked && (
        <InstrumentButtons
          instrument={instrument}
          number={+primaryParts[instrument]}
          chairs={primaryParts[instrument]}
        />
      )}
    </div>
  );
};

export default SingleInstrumentInput;
