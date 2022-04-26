import styles from "./Input.module.css";

const Input = (props) => {
  const placeholder = props.placeholder;

  const nameFinder = (event) => {
    props.nameTyping(event.target.value);
  };

  return (
    <input
      className={styles.control}
      placeholder={placeholder}
      onChange={nameFinder}
    ></input>
  );
};

export default Input;
