import Extra from "./extra/Extra";

import styles from "./Extras.module.css";

const extrasList = [
  "PICCOLO",
  "ALTOFLUTE",
  "ENGLISHHORN",
  "EBCLARINET",
  "BASSCLARINET",
  "SAX",
  "CONTRA",
  "FUGALHORN",
  "EUPHONIUM",
  "HARP",
  "CELESTE",
];

const Extras = () => {
  const displayableExtras = extrasList.map((extra) => (
    <Extra key={Math.random()} instrument={extra} />
  ));

  return <div className={styles.outerContainer}>{displayableExtras}</div>;
};

export default Extras;
