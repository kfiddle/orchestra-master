import classes from "./TextInput.module.css";

const TextInput = (props) => {
  const pieceTitle = props.pieceTitle;
  const stringNumbers = props.stringNumbers;
  const setStringNumbers = props.setStringNumbers;

  const label = props.label;
  const key = props.keyName;
  const style = props.style;

  const populator = (event, key) => {
    let tempPieceObject = stringNumbers[pieceTitle];
    tempPieceObject = { ...tempPieceObject, [key]: event.target.value };
    setStringNumbers({ ...stringNumbers, [pieceTitle]: tempPieceObject });
  };

 

  return (
    <div
      className={`${classes.control} ${classes.outerContainer}`}
      style={style}
    >
      <label>{label}</label>
      <input
        className={classes.control}
        type="text"
        onChange={(event) => populator(event, key)}
        style={style}
      ></input>
    </div>
  );
};

export default TextInput;
