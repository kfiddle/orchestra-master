import { useState } from "react";

import { FiEdit, FiPlus } from "react-icons/fi";

import PerformanceEdit from "../../editComponents/performanceEdit/PerformanceEdit";
import DateFormatter from "../../helperFunctions/DateFormatter";

import styles from "./Performance.module.css";

const Performance = (props) => {
  const [addPieceClicked, setAddPieceClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const { title, performanceDates } = props.performance;
  const displayDate = DateFormatter(performanceDates[0].date);

  const clickedOrNot = props.active ? styles.clicked : styles.unclicked;

  const clickedPerformance = () => {
    props.clicked(props.performance);
  };

  const editPerformance = () => {
    setEditClicked(true);
  };

  const closeModal = () => {
    setAddPieceClicked(false);
    setEditClicked(false);
  };

  const openAddPieceModal = () => {
    setAddPieceClicked(true);
  };

  return (
    <div
      className={`${styles.outerContainer} ${clickedOrNot}`}
      onClick={clickedPerformance}
    >
      <div className={styles.titleDiv}>{title}</div>
      <div className={styles.dateDiv}>{displayDate}</div>

      <div className={styles.buttonsDiv}>
        <FiPlus className={styles.plusSign} onClick={openAddPieceModal} />
        <FiEdit onClick={editPerformance} className={styles.editButton} />
      </div>

      {editClicked && (
        <PerformanceEdit
          closeModal={closeModal}
          performance={props.performance}
        />
      )}
    </div>
  );
};

export default Performance;
