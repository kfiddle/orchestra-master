import Extra from "./extra/Extra";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";

import styles from "./Extras.module.css";

const Extras = (props) => {
  const instrument = props.instrument;
  const { extras } = DoublingExtras();

  let displayableExtras = [];
  const instruments = Object.keys(extras);

  if (instruments.includes(instrument)) {
    displayableExtras = extras[instrument].map((extra) => (
      <Extra key={Math.random()} instrument={extra} />
    ));
  }

  return <div className={styles.outerContainer}>{displayableExtras}</div>;
};

export default Extras;
