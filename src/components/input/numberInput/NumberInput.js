import styles from "./NumberInput.module.css";

const NumberInput = (props) => {
  const number = props.number;
  const numberSetter = props.numberSetter;
  const standardChecked = props.standardChecked;

  const setNumber = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }

    numberSetter(event.target.value);
  };

  return (
    <input
      type={"text"}
      className={styles.input}
      onChange={setNumber}
      value={number === 0 ? "" : number}
    ></input>
  );
};

export default NumberInput;
