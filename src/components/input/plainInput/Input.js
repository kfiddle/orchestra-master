import React, { useEffect } from "react";

import styles from "./Input.module.css";

const Input = React.memo((props) => {
  const placeholder = props.placeholder;

  const nameFinder = (event) => {
    props.nameTyping(event.target.value);
  };

  useEffect(() => {
    console.log("I too was re-rendered");
    console.log(React.memo)
  }, []);

  return (
    <input
      className={styles.control}
      placeholder={placeholder}
      onChange={nameFinder}
    ></input>
  );
});

export default Input;
