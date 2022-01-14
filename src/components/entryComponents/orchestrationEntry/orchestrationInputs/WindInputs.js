import classes from "./OrchestrationInputs.module.css";

const WindInputs = (props) => {
  const [orchestration, setOrchestration] = props.stateList;

  const setANumber = (event, key) => {
    setOrchestration({ ...orchestration, [key]: event.target.value });
  };

  return (
    <div className={`${classes.windsOuter} ${classes.outerContainer}`}>
      <div className={classes.label}>Winds</div>

      <input
        type={"text"}
        className={`${classes.input} ${classes.winds}`}
      ></input>
    </div>
  );
};

export default WindInputs;
