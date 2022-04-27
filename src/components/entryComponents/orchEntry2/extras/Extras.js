import Extra from "./Extra";

import styles from "./Extras.module.css";

const extras = ["HARP", "PIANO", "CELESTE", "GLOCKENSPIEL", "ORGAN"];

const Extras = (props) => {
  const displayableExtras = extras.map((instrument) => (
    <Extra key={extras.indexOf(instrument)} instrument={instrument} />
  ));

  return <div className={styles.outerContainer}>{displayableExtras}</div>;
};

export default Extras;
