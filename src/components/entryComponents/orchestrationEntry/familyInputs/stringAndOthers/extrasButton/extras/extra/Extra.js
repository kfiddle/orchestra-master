import styles from "./Extra.module.css";

const Extra = (props) => {
  console.log(props.instrument);

  const clickHandler = () => {
    console.log(props.instrument);
  };

  return (
    <div onClick={clickHandler} className={styles.instrumentItemDiv}>
      <div className={styles.nameDiv}>{props.instrument}</div>
    </div>
  );
};

export default Extra;
