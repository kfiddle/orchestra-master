import { FiEdit } from "react-icons/fi";

import DateFormatter from "../helperFunctions/DateFormatter";

import styles from "./Performance.module.css";

const Performance = (props) => {
  const { title, date } = props.performance;
  const displayDate = DateFormatter(date);

  const editPerformance = () => {
    console.log(props.performance);
  };

  return (
    <div className={styles.outerContainer} onClick={()=> console.log('test')}>
      <div className={styles.titleDiv}>{title}</div>
      <div className={styles.dateDiv}>{displayDate}</div>
      <div className={styles.editButtonDiv}>
        <FiEdit onClick={editPerformance} className={styles.editButton} />
      </div>
    </div>
  );
};

export default Performance;
