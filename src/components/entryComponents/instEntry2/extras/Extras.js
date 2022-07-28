import Extra from "./Extra";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";

import styles from "./Extras.module.css";

const Extras = ({ visible }) => {
  const { auxiliaries } = DoublingExtras();

  const displayableExtras = auxiliaries.map((instrument) => (
    <Extra key={auxiliaries.indexOf(instrument)} instrument={instrument} />
  ));

  const classNames = visible
    ? `${styles.outerContainer} ${styles.visible}`
    : styles.outerContainer;

  return <div className={classNames}>{displayableExtras}</div>;
};

export default Extras;
