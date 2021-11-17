import classes from "./OrchestrationInput.module.css";

const OrchestrationInput = (props) => {
  const { label, key, populator, } = props.inputObject;


  return (
    <div className={classes.control}>
      <label>{label}</label>
      <input type={"text"} onChange={(event)=> populator(event, key)} ></input>
    </div>
  );
};

export default OrchestrationInput;
