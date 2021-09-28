import classes from "./OrchestrationInput.module.css";

const OrchestrationInput = (props) => {
  const { instEnum, setANumber } = props;

  return (
    <div className={classes.control}>
      <label>{instEnum}</label>
      <input
        type="number"
        onChange={(event) => setANumber(instEnum, event.target.value)}
      ></input>
    </div>
  );
};

export default OrchestrationInput;
