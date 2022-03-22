import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const instrument = props.instrument;

  const clickHandler = () => {
    props.clicked(instrument);
  };

  return (
    <div className={styles.instrumentBubble}>
      <div className={styles.labelAndClickerHolder} onClick={clickHandler}>
        {instrument}
      </div>
      <input
        type={"text"}
        className={styles.input}
        // onChange={setThisInstrument}
        // value={inputValue}
      ></input>
    </div>
  );
};

export default InstrumentNum;
