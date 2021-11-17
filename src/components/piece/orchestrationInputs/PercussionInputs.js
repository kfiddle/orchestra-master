import classes from "./OrchestrationInputs.module.css";

const PercussionInputs = (props) => {
  const [orchestration, setOrchestration] = props.stateList;

  const setANumber = (event, key) => {
    setOrchestration({ ...orchestration, [key]: event.target.value });
  };

  return (
    <div className={`${classes.percussionOuter} ${classes.outerContainer}`}>
      <div className={classes.label}>Perc</div>
      <input
        type={"text"}
        className={`${classes.input} ${classes.percussion}`}
      ></input>
    </div>
  );
};

export default PercussionInputs;
