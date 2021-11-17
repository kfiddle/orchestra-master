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
        onChange={(event) => setANumber(event, "VIOLIN1")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "VIOLIN2")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "VIOLA")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "CELLO")}
      ></input>
      <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "BASS")}
      ></input>
    </div>
  );
};

export default StringInputs;
