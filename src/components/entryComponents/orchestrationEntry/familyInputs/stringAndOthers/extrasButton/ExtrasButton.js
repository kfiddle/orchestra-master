

import styles from "./ExtrasButton.module.css";

import { Fragment } from "react/cjs/react.production.min";

const ExtrasButton = (props) => {
  const extrasClicker = props.extrasClicker;

  const extrasClickHandler = () => {
    extrasClicker();
  };

  return (
    <Fragment>
      <button className={styles.extrasButton} onClick={extrasClickHandler}>
        Extras
      </button>
    </Fragment>
  );
};

export default ExtrasButton;
