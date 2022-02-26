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

const Extras = (props) => {
  const extrasStateStuff = props.extrasStateStuff;

  const displayableExtras = extrasList.map((extra) => (
    <Extra
      key={Math.random()}
      instrument={extra}
      extrasStateStuff={extrasStateStuff}
    />
  ));

  return <div className={styles.outerContainer}>{displayableExtras}</div>;
};

export default Extras;
