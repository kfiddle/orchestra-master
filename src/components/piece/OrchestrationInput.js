

import classes from './OrchestrationInput.module.css';

const OrchestrationInput = (props) => {
  return (
    <div className={classes.control}>
      <label>{props.label}</label>
      <input type="number"></input>
    </div>
  );
};

export default OrchestrationInput;
