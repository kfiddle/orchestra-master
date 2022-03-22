import InstButton from "../instButton/InstButton";
import styles from "./AlternateDiv.module.css";

const AlternateDiv = (props) => {
  
  return (
    <div className={styles.outerContainer}>
      <div className={styles.sopranoDiv}>SOPRANO</div>
      <div className={styles.altoDiv}>ALTO</div>
      <div className={styles.tenorDiv}>TENOR</div>
      <div className={styles.bassDiv}>BASS</div>
    </div>
  );
};

export default AlternateDiv;
