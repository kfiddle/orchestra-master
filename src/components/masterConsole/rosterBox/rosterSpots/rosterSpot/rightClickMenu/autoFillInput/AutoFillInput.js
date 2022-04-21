import { useState } from "react";

import { Hint } from "react-autocomplete-hint";


import styles from "./AutoFillInput.module.css";

//rightClickMenu has this

const AutoFillInput = (props) => {
  const playersList = props.playersList;
  const playerLastNames = playersList.map((player) => player.lastName);

  const foundName = props.foundName;

  return (
    <Hint
      options={playerLastNames}
      allowTabFill={true}
      allowEnterFill={true}
      onFill={foundName}
    >
      <input
        className={styles.testInput}
        // onChange={(event) => console.log(event.target.value)}
      ></input>
    </Hint>
  );
};

export default AutoFillInput;
