import classes from "./OrchestrationInputs.module.css";

const StringInputs = (props) => {
  const [orchestration, setOrchestration] = props.stateList;

  const setANumber = (event, key) => {
    setOrchestration({ ...orchestration, [key]: event.target.value });
  };

  return (
    <div className={classes.stringsOuter}>
      <div className={classes.label}>Strings</div>

      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "Violin1")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "Violin2")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "Viola")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "Cello")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "Bass")}
      ></input>
    </div>
  );
};

export default StringInputs;
