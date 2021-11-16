import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import PlayerEntry from "./playerEntry/PlayerEntry";

import styles from "./Player.module.css";

const Player = (props) => {
  const { firstNameArea, lastName, email, cellPhone, contract } = props.player;

  const [editClicked, setEditClicked] = useState(false);

  const editPlayer = () => {
    setEditClicked(true);
  };

  const closeModal = () => {
    setEditClicked(false);
  };

  const showInfo = () => {
    props.clicked(props.player);
  };

  return (
    <div className={styles.outerContainer} onClick={showInfo}>
      <div className={styles.name}>
        {firstNameArea} {lastName}
      </div>
      <div className={styles.instrument}></div>
      <div className={styles.email}>{email}</div>
      <div className={styles.cellPhone}>{cellPhone}</div>
      <div className={styles.editButtonDiv}>
        <FiEdit onClick={editPlayer} className={styles.editButton} />
      </div>

      {editClicked && (
        <PlayerEntry player={props.player} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Player;
