import styles from "./AdjustButton.module.css";
const AdjustButton = (props) => {
  return (
    <div className={styles.buttonDiv}>
      <button className={styles.button}>Adjust</button>
    </div>
  );
};

export default AdjustButton;
