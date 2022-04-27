import { useState, Fragment } from "react";
import Extras from "./Extras";


import styles from "./ExtrasButton.module.css";

const ExtrasButton = () => {
  const [extrasClicked, setExtrasClicked] = useState(false);

  const extrasClickHandler = () => {
    setExtrasClicked((previous) => !previous);
  };

  return (
    <Fragment>
      <button className={styles.button} onClick={extrasClickHandler}>
        Extras
      </button>
      {extrasClicked && <Extras />}
    </Fragment>
  );
};

export default ExtrasButton;
