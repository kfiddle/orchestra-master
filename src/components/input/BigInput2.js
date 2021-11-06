import classes from "./Input.module.css";

const BigInput2 = (props) => {
  const { label, key, state, style } = props.shebang;
  const { player, setPlayer } = state;

  let placeholder = player[key];

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input
        className={classes.control}
        type={"text"}
        onChange={(event) =>
          setPlayer({ ...player, [key]: event.target.value })
        }
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default BigInput2;
