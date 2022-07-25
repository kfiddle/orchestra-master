import React, { Fragment } from "react";

import LastNameInput from "./lastNameInput/LastNameInput";
import styles from "./RightClick.module.css";

//rosterSpot has this

const RightClick = React.memo(
  ({ pic: { player }, rightClicker, removePlayerClicker }) => {
    const removeClicker = () => {
      removePlayerClicker();
    };

    let playerRemoveButton, lastNameInput;

    if (player) {
      playerRemoveButton = (
        <Fragment>
          <button className={styles.button} onClick={removeClicker}>
            Remove Player
          </button>
        </Fragment>
      );
    } else {
      lastNameInput = <LastNameInput />;
    }

    return (
      <div className={styles.outerContainer}>
        {player && playerRemoveButton}
        {!player && lastNameInput}
      </div>
    );
  }
);

export default RightClick;
