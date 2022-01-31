import styles from "./DoublingOption.module.css";

const DoublingOption = (props) => {
  const instrumentName = props.instrumentName;

  const showName = () => {
      console.log(instrumentName);
  }

  return <div className={styles.outerContainer} onClick={showName}>{instrumentName}</div>;
};

export default DoublingOption;
