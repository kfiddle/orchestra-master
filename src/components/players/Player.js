import { useState } from "react";

import styles from "./Player.module.css";

const Player = (props) => {
  const { firstNameArea, lastName, instruments, email, cellPhone } =
    props.player;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.name}>{firstNameArea} {lastName}</div>
      <div className={styles.instrument}>{instruments[0].name}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.cellPhone}>{cellPhone}</div>
    </div>
  );
};

export default Player;
