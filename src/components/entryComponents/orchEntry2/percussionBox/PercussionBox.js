import InstrumentNum from "../instrumentNum/InstrumentNum";
import styles from "./PercussionBox.module.css";

const PercussionBox = (props) => {
  return (
    <div className={styles.percussionDiv}>
      <div className={styles.label}>PERCUSSION</div>

      <InstrumentNum instrument={"TIMPANI"} />
      <InstrumentNum instrument={"PERCUSSION"} />
    </div>
  );
};

export default PercussionBox;
