import ExtraTypeBox from "./ExtraTypeBox";

import classes from "./SubOrContractBox.module.css";

const SubOrContractBox = (props) => {
  const setter = props.setter;
  const contracted = props.contracted;
  const player = props.player;

  const contractTypeClicked = (type) => {
    setter(type);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.initialButtonsDiv}>
        <button
          className={
            contracted
              ? `${classes.button} ${classes.subOrContract}`
              : `${classes.button} ${classes.subOrContract} ${classes.highlightedType}`
          }
          onClick={() => contractTypeClicked(false)}
          type={"button"}
        >
          Sub
        </button>
        <button
          className={
            !contracted
              ? `${classes.button} ${classes.subOrContract}`
              : `${classes.button} ${classes.subOrContract} ${classes.highlightedType}`
          }
          onClick={() => contractTypeClicked(true)}
          type={"button"}
        >
          Contract
        </button>
      </div>

      <ExtraTypeBox contracted={contracted} setter={setter} player={player} />
    </div>
  );
};

export default SubOrContractBox;
