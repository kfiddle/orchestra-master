import styles from "./SingleInstrumentInput.module.css";

const SingleInstrumentInput = (props) => {
  //   const [orchestration, setOrchestration] = props.stateList;
  const instrument = props.instrument;

  return (
    <div className={styles.instrumentBubble}>
      <div className={styles.labelAndClickerHolder}> {instrument}</div>
      <input
        type={"text"}
        className={styles.input}

        //   onChange={(event) => setANumber(event, instruments[0])}
        //   value={orchestration[instruments[0]]}
      ></input>
    </div>
  );
};

export default SingleInstrumentInput;
