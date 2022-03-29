import Extra from "./extra/Extra";

import styles from "./Extras.module.css";

const Extras = (props) => {
    const instrumentList = props.instrumentList;

  const displayableExtras = instrumentList.map((extra) => (
    <Extra key={Math.random()} instrument={extra} />
  ));

  return <div className={styles.outerContainer}>{displayableExtras}</div>;
};

export default Extras;
