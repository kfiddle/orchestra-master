import { useState } from "react";

import { Hint } from "react-autocomplete-hint";

import useGetAList3 from "../../../../../../../hooks/useGetAList3";

import styles from "./AutoFillInput.module.css";

const AutoFillInput = (props) => {
  const [playersList, setReload] = useGetAList3("get-all-players");

  const playerLastNames = playersList.map((player) => player.lastName);


  return (
    <Hint options={playerLastNames} allowTabFill={true} allowEnterFill={true}>
      <input
        className={styles.testInput}
      ></input>
    </Hint>
  );
};

export default AutoFillInput;
