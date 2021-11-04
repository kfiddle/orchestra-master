import classes from "./ExtraType.module.css";

const ExtraTypeBox = (props) => {
  const contracted = props.contracted;

  const subBox = (
    <div className={classes.subBox}>
      <button className={classes.subButton}>1</button>
      <button className={classes.subButton}>2</button>
      <button className={classes.subButton}>3</button>
      <button className={classes.subButton}>4</button>
      <button className={classes.subButton}>5</button>
    </div>
  );

  const contractBox = (
    <div className={classes.contractBox}>
      <button className={classes.contractButton}>Principal</button>
      <button className={classes.contractButton}>Assistant</button>
      <button className={classes.contractButton}>Section</button>
    </div>
  );

  return <div>{contracted ? contractBox : subBox}</div>;
};

export default ExtraTypeBox;
