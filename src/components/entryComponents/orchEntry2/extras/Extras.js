import Extra from "./Extra";

import styles from "./Extras.module.css";

const extras = ["HARP", "PIANO", "CELESTE", "GLOCKENSPIEL", "ORGAN"];

const Extras = (props) => {
  const visible = props.visible;

  const displayableExtras = extras.map((instrument) => (
    <Extra key={extras.indexOf(instrument)} instrument={instrument} />
  ));

  const classNames = visible? `${styles.outerContainer} ${styles.visible}`: styles.outerContainer;

  return <div className={classNames}>{displayableExtras}</div>;
};

export default Extras;
