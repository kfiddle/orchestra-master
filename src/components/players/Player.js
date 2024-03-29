import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

import PlayerEntry from '../entryComponents/playerEntry/entry/PlayerEntry';
import useContractFormatter from '../../hooks/useContractFormatter';

import styles from './Player.module.css';

const Player = ({ player, possibleEdit, clicked }) => {
  const { first, last, email, phone, insts, rank } = player;

  const [editClicked, setEditClicked] = useState(false);

  const formattedContract = useContractFormatter(insts, rank);
  

  const editPlayer = () => {
    setEditClicked(true);
  };

  const closeModal = () => {
    setEditClicked(false);
    possibleEdit();
  };

  const showInfo = () => {
    clicked(player);
  };

  return (
    <div className={styles.outerContainer} onClick={showInfo}>
      <div className={styles.name}>
        {first} {last}
      </div>
      <div className={styles.contractTitle}>{formattedContract}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.cellPhone}>{phone}</div>
      <div className={styles.editButtonDiv}>
        <FiEdit onClick={editPlayer} className={styles.editButton} />
      </div>

      {editClicked && <PlayerEntry player={player} closeModal={closeModal} />}
    </div>
  );
};

export default Player;
