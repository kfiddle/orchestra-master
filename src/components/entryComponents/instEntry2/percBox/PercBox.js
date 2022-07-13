import styles from "./PercBox.module.css";

const PercBox = () => {
  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>Timpani</label>
      <input className={styles.input}></input>
      <label className={styles.label}>Percussion</label>
      <input className={styles.input}></input>
    </div>
  );
};

export default PercBox;
