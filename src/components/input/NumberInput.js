import { useState } from "react";

const NumberInput = (props) => {
  const [inputNumber, setInputNumber] = useState(null);
  originalNumber = props.originalNumber;

  return (
    <input
      type={"text"}
      className={styles.input}
      placeholder={originalNumber}
      onChange={setNumber}
      value={inputValue}
    ></input>
  );
};

export default NumberInput;
