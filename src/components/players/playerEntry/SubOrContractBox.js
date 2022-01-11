import ExtraTypeBox from "./ExtraTypeBox";

import classes from "./SubOrContractBox.module.css";

const SubOrContractBox = (props) => {
  const setter = props.setter;

  const contracted = props.contracted;

  const player = props.player;
  const contract = props.contract;
  const newContractSetter = props.newContractSetter;

  const contractTypeClicked = (contractType) => {
    newContractSetter({ ...player, type: contractType });
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.initialButtonsDiv}>
        <button
          className={
            player.type === "CONTRACTED"
              ? `${classes.button} ${classes.subOrContract}`
              : `${classes.button} ${classes.subOrContract} ${classes.highlightedType}`
          }
          onClick={() => contractTypeClicked("SUB")}
          type={"button"}
        >
          Sub
        </button>
        <button
          className={
            player.type === "SUB"
              ? `${classes.button} ${classes.subOrContract}`
              : `${classes.button} ${classes.subOrContract} ${classes.highlightedType}`
          }
          onClick={() => contractTypeClicked("CONTRACTED")}
          type={"button"}
        >
          Contract
        </button>
      </div>

      <ExtraTypeBox
        contracted={contracted}
        setter={setter}
        player={player}
        contract={contract}
        contractSetter={newContractSetter}
      />
    </div>
  );
};

export default SubOrContractBox;
