import { useState, Fragment } from "react";
import Extras from "./Extras";

import styles from "./ExtrasButton.module.css";

const ExtrasButton = () => {
  const [extrasClicked, setExtrasClicked] = useState(true);

  const extrasClickHandler = () => {
    setExtrasClicked((previous) => !previous);
  };

  return (
    <Fragment>
      {/* <button className={styles.button} onClick={extrasClickHandler}>
        Extras
      </button> */}
      <Extras visible={extrasClicked} />
    </Fragment>
  );
};

export default ExtrasButton;
