import ExtraTypeBox3 from "./extraTypeBox/ExtraTypeBox";

import classes from "./SubOrContractBox.module.css";

const SubOrContractBox = ({ player, setPlayer }) => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.initialButtonsDiv}>
        <button
          className={
            player.type === "SUB"
              ? `${classes.button} ${classes.subOrContract}  ${classes.highlightedType}`
              : `${classes.button} ${classes.subOrContract}`
          }
          onClick={() => setPlayer({ ...player, type: "SUB" })}
          type={"button"}
        >
          Sub
        </button>
        <button
          className={
            player.type === "CONTRACTED"
              ? `${classes.button} ${classes.subOrContract} ${classes.highlightedType}`
              : `${classes.button} ${classes.subOrContract} `
          }
          onClick={() => setPlayer({ ...player, type: "CONTRACTED" })}
          type={"button"}
        >
          Contract
        </button>
      </div>

      <ExtraTypeBox3 player={player} setPlayer={setPlayer} />
    </div>
  );
};

export default SubOrContractBox;
