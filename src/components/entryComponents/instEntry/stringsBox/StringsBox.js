import styles from "./StringsBox.module.css";

const StringsBox = () => {
  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>STRINGS</label>

      <button className={styles.button}>SYM</button>
      <button className={styles.button}>POPS</button>

      <input className={styles.input} />
    </div>
  );
};

export default StringsBox;
