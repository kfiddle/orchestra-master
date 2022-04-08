import styles from "./ExtrasOpt.module.css";

const ExtrasOpt = (props) => {
  const part = props.part;
  const partClicker = props.partClicker;

  const clickedInstrumentHandler = () => {
    partClicker(part);
  };

  return (
    <div className={styles.outerContainer} onClick={clickedInstrumentHandler}>
      {part}
    </div>
  );
};

export default ExtrasOpt;
