import classes from "./OrchestrationInputs.module.css";

const BrassInputs = (props) => {
  const [orchestration, setOrchestration] = props.stateList;

  const setANumber = (event, key) => {
    setOrchestration({ ...orchestration, [key]: event.target.value });
  };

  return (
    <div className={`${classes.brassOuter} ${classes.outerContainer}`}>
      <div className={classes.label}>Brass</div>
      <input
        type={"text"}
        className={`${classes.input} ${classes.brass}`}
      ></input>
    </div>
  );
};

export default BrassInputs;
