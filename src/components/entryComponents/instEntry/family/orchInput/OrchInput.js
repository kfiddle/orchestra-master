import styles from "./OrchInput.module.css";

const OrchInput = (props) => {
  const number = props.number;
  const numberSetter = props.numberSetter;
  const standardChecked = props.standardChecked;

  const setNumber = (event) => {
    console.log(event);
    if (isNaN(event.target.value) && event.keyCode !== "a") {
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

export default OrchInput;
