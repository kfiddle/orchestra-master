import DoublingOption from "./doublingOption/DoublingOption";

import styles from "./DoublingBox.module.css";

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

const DoublingBox = (props) => {
  const instrument = props.instrument;
  const doublingOptions = doublingOptionsObject[instrument];

  const displayedOptions = doublingOptions.map((instrumentName) => (
    <DoublingOption key={Math.random()} instrumentName={instrumentName} />
  ));

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default DoublingBox;
