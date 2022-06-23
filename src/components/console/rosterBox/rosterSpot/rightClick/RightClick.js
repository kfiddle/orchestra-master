import React, { Fragment } from "react";

import LastNameInput from "./lastNameInput/LastNameInput";
import styles from "./RightClick.module.css";

//rosterSpot has this

const RightClick = React.memo((props) => {
  const pic = props.pic;
  const player = pic.player;
  const rightClicker = props.rightClicker;
  const removePlayerClicker = props.removePlayerClicker;
  const setMaybies = props.setMaybies;

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
        {/* <button className={styles.button}>Adjust Chair</button> */}
      </Fragment>
    );
  } else {
    lastNameInput = <LastNameInput setMaybies={setMaybies} />;
  }

  return (
    <div className={styles.outerContainer}>
      {player && playerRemoveButton}
      {!player && lastNameInput}
    </div>
  );
});

export default RightClick;
