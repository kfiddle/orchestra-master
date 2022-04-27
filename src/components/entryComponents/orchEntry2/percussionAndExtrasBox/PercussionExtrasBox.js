
import InstrumentNum from "../instrumentNum/InstrumentNum";
import ExtrasButton from "../extras/ExtrasButton";
import styles from "./PercussionExtrasBox.module.css";

const PercussionExtrasBox = (props) => {
  return (
    <div className={styles.percussionDiv}>
      <div className={styles.label}>PERCUSSION</div>

      <InstrumentNum instrument={"TIMPANI"} />
      <InstrumentNum instrument={"PERCUSSION"} />
      <ExtrasButton />
    </div>
  );
};

export default PercussionExtrasBox;
