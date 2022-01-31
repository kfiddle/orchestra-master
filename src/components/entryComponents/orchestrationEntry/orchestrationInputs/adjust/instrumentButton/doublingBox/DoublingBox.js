import DoublingOption from "./doublingOption/DoublingOption";

import styles from "./DoublingBox.module.css";

const DoublingBox = (props) => {
  const doublingOptions = props.doublingOptions;

  const displayedOptions = doublingOptions.map((instrumentName) => (
    <DoublingOption key={Math.random()} instrumentName={instrumentName} />
  ));

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default DoublingBox;
