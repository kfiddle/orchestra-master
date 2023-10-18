import { useEffect, useState, useContext } from "react";

import { FiEdit, FiPlus } from "react-icons/fi";

import services from '../../../../dummyData/services';
import { serviceType } from "../../../../dummyData/enums";

import ReloadFlagStore from "../../../../store/reload-flag-store";
import { ConsoleHolder } from "../../../../store/object-holder";

import PerformanceEdit2 from "../../../editComponents/performanceEdit/PerformanceEdit2";

import usePushBasic from "../../../../hooks/usePushBasic";

import useDateFormatter from "../../../../hooks/useDateFormatter";

import styles from "./Show.module.css";
import InstEntry2 from "../../../entryComponents/instEntry2/InstEntry2";

//shows has this

const Show = (props) => {
  const [editClicked, setEditClicked] = useState(false);
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const show = props.show;
  const { title, id } = show;

  // const date = usePushBasic(props.show, "get-date-from-show");

  function formatDate(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because months are zero-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
    return `${month}/${day}/${year}`;
  }

  const concertService = services.find(service => (service.showId === id && service.type === serviceType.CONCERT))
  console.log(concertService)
  const displayDate = concertService ? formatDate(concertService.date) : ''; 
  // const displayDate = useDateFormatter(date);

  const clickedOrNot =
    show === dashboard.clickedShow ? styles.clicked : styles.unclicked;

  const clickedPerformance = () => {
    dispatch({ type: "clickedShow", clickedShow: props.show });
  };

  const editPerformance = () => {
    setEditClicked(true);
  };

  const closeModal = () => {
    setEditClicked(false);
    dispatch({ type: "modalClosed", modalClosed: true });
  };

  return (
    <div
      className={`${styles.outerContainer} ${clickedOrNot}`}
      onClick={clickedPerformance}
    >
      <div className={styles.titleDiv}>{title} </div>
      <div className={styles.dateDiv}>{displayDate}</div>

      <div className={styles.buttonsDiv}>
        <FiEdit onClick={editPerformance} className={styles.editButton} />
      </div>

      {editClicked && (
        <PerformanceEdit2 closeModal={closeModal} performance={show} />
      )}
    </div>
  );
};

export default Show;
