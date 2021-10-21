
import classes from './InputDate.module.css';

const InputDate = (props) => {
  const { label, key, populator, pObject, style } = props.inputObject;

  const placeHolder = pObject[key];

  return (
    <div className={classes.control} style={style}>
      <label>{label}</label>
      <input
        type={"date"}
        onChange={(event) => populator(event, key, 'date')}
        placeholder={placeHolder}
        style={style}
      ></input>
    </div>
  );
};

export default InputDate;
