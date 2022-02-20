


import classes from './TextInput.module.css';

const TextInput = props => {
    const theObject = props.theObject;
    const setTheObject = props.setTheObject;

    const label = props.label;
    const key = props.keyName;
    const style = props.style;
  
    const populator = (event, key) => {
      setTheObject({ ...theObject, [key]: event.target.value });
    };
  
    return (
      <div className={`${classes.control} ${classes.outerContainer}`} style={style}>
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