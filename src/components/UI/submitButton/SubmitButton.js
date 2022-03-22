import styles from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  return <button className={styles.button} onClick={props.submit}>SUBMIT</button>;
};

export default SubmitButton;
