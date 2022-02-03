import styles from "./ExtrasButton.module.css";
const ExtrasButton = (props) => {
  return (
    <div className={styles.buttonDiv}>
      <button className={styles.button}>Extra</button>
    </div>
  );
};

export default ExtrasButton;
