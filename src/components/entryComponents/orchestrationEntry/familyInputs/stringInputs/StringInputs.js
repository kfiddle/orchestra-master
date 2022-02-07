

import classes from "./StringInputs.module.css";

const StringInputs = (props) => {
  const [orchestration, setOrchestration] = props.stateList;

  const setANumber = (event, key) => {
    setOrchestration({ ...orchestration, [key]: event.target.value });
  };


  return (
    <div className={classes.outerContainer}>
      <div className={classes.label}>Full Strings?</div>
      <input
        type={"checkBox"}
        className={classes.checkBox}
        onChange={(event) => setANumber(event, "Violin1")}
      ></input>
        <div className={classes.label}>Custom</div>
      <input
        type={"checkBox"}
        className={classes.checkBox}
        onChange={(event) => setANumber(event, "Violin1")}
      ></input>

       <input
        type={"text"}
        className={`${classes.input} ${classes.strings}`}
        onChange={(event) => setANumber(event, "Violin2")}
      ></input>

      
      {/*
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
      ></input> */}
    </div>
  );
};

export default StringInputs;
