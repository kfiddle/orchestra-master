import { useEffect, useState, useContext } from "react";

import { FiEdit, FiPlus } from "react-icons/fi";

import ReloadFlagStore from "../../../../store/reload-flag-store";
import { ConsoleHolder } from "../../../../store/object-holder";

import PerformanceEdit2 from "../../../editComponents/performanceEdit/PerformanceEdit2";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import useDateFormatter from "../../../../hooks/useDateFormatter";

import styles from "./Show.module.css";

//shows has this

const Show = (props) => {
  const [editClicked, setEditClicked] = useState(false);
  const [date, setDate] = useState("");
  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const show = props.show;
  const { title } = show;

  useEffect(() => {
    const getPrimaryDate = async () => {
      try {
        const response = await PushBasic(props.show, "get-date-from-show");
        let answeredDate = await response.json();
        setDate(answeredDate);
      } catch (error) {
        return console.log(error);
      }
    };

    getPrimaryDate();
  }, []);

  const displayDate = useDateFormatter(date);

  const clickedOrNot =
    show === dashboard.clickedShow ? styles.clicked : styles.unclicked;

  const clickedPerformance = () => {
    dispatch({ type: "clickedShow", clickedShow: props.show });
  };

  const editPerformance = () => {
    setEditClicked(true);
  };

  const closeModal = () => {
    setReloadFlag(true);
    setEditClicked(false);
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
        <PerformanceEdit2
          closeModal={closeModal}
          performance={show}
        />
      )}
    </div>
  );
};

export default Show;
