import { FiEdit } from "react-icons/fi";

import styles from "./Inst.module.css";

const Inst = ({ inst }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.nameDiv}>{inst.name}</div>
      <div className={styles.abbrevDiv}>{inst.abbreviation}</div>
      <div className={styles.iconDiv}>
        <FiEdit />
      </div>
    </div>
  );
};

export default Inst;
