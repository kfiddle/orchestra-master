import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import styles from "./SinglePartAdjuster.module.css";

const SinglePartAdjuster = ({ part, index, partDeleter }) => {
  const { instrument, rank, specialDesignate } = part;
  const instName = instrument.name;

  let rankOrDesignate;

  if (rank > 0) {
    rankOrDesignate = rank;
  } else if (specialDesignate !== null) {
    rankOrDesignate = "ASSIST";
  }

  const deleteClicker = () => {
    partDeleter(index);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerDiv}>{instName}</div>
      <div className={styles.innerDiv}>{rankOrDesignate} </div>
      <div className={styles.innerDiv}>
        <TiDelete className={styles.icon} onClick={deleteClicker} />
      </div>
    </div>
  );
};

export default SinglePartAdjuster;
