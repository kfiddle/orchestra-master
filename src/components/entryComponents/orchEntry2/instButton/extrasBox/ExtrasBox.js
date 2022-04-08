import DoublingExtras from "../../../../helperFunctions/DoublingExtras";

import ExtrasOpt from "./extrasOpt/ExtrasOpt";

import styles from "./ExtrasBox.module.css";

const ExtrasBox = (props) => {
  const primaryPart = props.primaryPart;
  const partClicker = props.partClicker;

  const { extras } = DoublingExtras();


  const displayedOptions = extras[primaryPart].map((part) => (
    <ExtrasOpt key={part} part={part} partClicker={partClicker} />
  ));

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default ExtrasBox;
