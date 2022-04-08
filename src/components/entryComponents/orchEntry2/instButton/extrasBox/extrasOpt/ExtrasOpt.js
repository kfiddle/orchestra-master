import styles from "./ExtrasOpt.module.css";

const ExtrasOpt = (props) => {
  const part = props.part;

  const clickedInstrumentHandler = () => {
    console.log(part);
  };

  return (
    <div className={styles.outerContainer} onClick={clickedInstrumentHandler}>
      {part}
    </div>
  );
};

export default ExtrasOpt;
