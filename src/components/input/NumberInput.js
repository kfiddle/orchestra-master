import { useState } from "react";

const NumberInput = (props) => {
const [inputValue, setInputValue]


  return (
    <input
      type={"text"}
      className={styles.input}
      onChange={setThisInstrument}
      value={inputValue}
    ></input>
  );
};

export default NumberInput;
