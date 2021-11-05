import classes from "./Input.module.css";


const BigInput2 = (props) => {
  const { label, key, state, style } = props.shebang;
  const { player, setPlayer } = state;

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input
        className={classes.control}
        type={"text"}
        onChange={(event) => setPlayer({ ...player, [key]: event.target.value })}
      ></input>
    </div>
  );
};

export default BigInput2;
