import { useState } from "react";

import { FiEdit, FiPlus } from "react-icons/fi";

import DateFormatter from "../helperFunctions/DateFormatter";
import PieceEntry from "../piece/PieceEntry";

import styles from "./Performance.module.css";

const Performance = (props) => {
  const [addPieceClicked, setAddPieceClicked] = useState(false);

  const { title, date } = props.performance;
  const displayDate = DateFormatter(date);

  const clickedOrNot = props.active? styles.clicked: styles.unclicked;

  const clickedPerformance = () => {
      props.clicked(props.performance);
  }

  const editPerformance = () => {
    console.log(props.performance);
  };

  const closeModal = () => {
      setAddPieceClicked(false);
  }

  const openAddPieceModal = () => {
      setAddPieceClicked(true);
  }

  return (
    <div className={`${styles.outerContainer} ${clickedOrNot}`} onClick={clickedPerformance}>
      <div className={styles.titleDiv}>{title}</div>
      <div className={styles.dateDiv}>{displayDate}</div>

      <div className={styles.buttonsDiv}>
        <FiPlus className={styles.plusSign} onClick={openAddPieceModal} />
        <FiEdit onClick={editPerformance} className={styles.editButton} />
      </div>
      {addPieceClicked && <PieceEntry closeModal={closeModal}/>}
    </div>
  );
};

export default Performance;
