import { useState } from "react";

import styles from "./Player.module.css";

const Player = (props) => {
  const { firstNameArea, lastName, instruments, email, cellPhone } =
    props.player;

  return (
    <div className={styles.outerContainer}>
      <div>{firstNameArea}</div>
      <div>{lastName}</div>
      <div>{instruments[0].name}</div>
      <div>{email}</div>
      <div>{cellPhone}</div>
    </div>
  );
};

export default Player;
