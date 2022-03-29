import { useEffect, useState, useContext } from "react";

import { FiEdit, FiPlus } from "react-icons/fi";

import ReloadFlagStore from "../../../store/reload-flag-store";

import PerformanceEdit2 from "../../editComponents/performanceEdit/PerformanceEdit2";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import useDateFormatter from "../../../hooks/useDateFormatter";

import styles from "./Performance.module.css";

const Performance = (props) => {
  const [addPieceClicked, setAddPieceClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [date, setDate] = useState("");
  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);

  const { title } = props.performance;

  useEffect(() => {
    const getPrimaryDate = async () => {
      try {
        const response = await PushBasic(
          props.performance,
          "get-date-from-show"
        );
        let answeredDate = await response.json();
        setDate(answeredDate);
      } catch (error) {
        return console.log(error);
      }
    };

    getPrimaryDate();
  }, []);

  const displayDate = useDateFormatter(date);

  const clickedOrNot = props.active ? styles.clicked : styles.unclicked;

  const clickedPerformance = () => {
    props.clicked(props.performance);
  };

  const editPerformance = () => {
    setEditClicked(true);
  };

  const closeModal = () => {
    setReloadFlag(true);
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
      <div className={styles.titleDiv}>{title} </div>
      <div className={styles.dateDiv}>{displayDate}</div>

      <div className={styles.buttonsDiv}>
        <FiPlus className={styles.plusSign} onClick={openAddPieceModal} />
        <FiEdit onClick={editPerformance} className={styles.editButton} />
      </div>

      {editClicked && (
        <PerformanceEdit2
          closeModal={closeModal}
          performance={props.performance}
        />
      )}
    </div>
  );
};

export default Performance;
