import { useState } from "react";

import Extras from "./extras/Extras";

import styles from "./ExtrasButton.module.css";

import { Fragment } from "react/cjs/react.production.min";

const ExtrasButton = (props) => {
  const [extrasButtonClicked, setExtrasButtonClicked] = useState(false);
  const extrasStateStuff= props.extrasStateStuff;

  const extrasClickHandler = () => {
    setExtrasButtonClicked((previous) => !previous);
  };

  return (
    <Fragment>
      <button className={styles.extrasButton} onClick={extrasClickHandler}>
        Extras
      </button>
      {extrasButtonClicked && <Extras extrasStateStuff={extrasStateStuff} />}
    </Fragment>
  );
};

export default ExtrasButton;
