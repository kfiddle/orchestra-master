import { RiRecordCircleFill } from "react-icons/ri";

import ExtraTypeBox from "./extraTypeBox/ExtraTypeBox";

import classes from "./SubOrContractBox.module.css";

const SubOrContractBox = ({ player, setPlayer }) => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.initialButtonsDiv}>
        <div
          className={
            player.type === "SUB"
              ? `${classes.div} ${classes.subOrContract}  ${classes.highlightedType}`
              : `${classes.div} ${classes.subOrContract}`
          }
          onClick={() => setPlayer({ ...player, type: "SUB" })}
          type={"button"}
        >
          Sub
          <RiRecordCircleFill className={classes.icon} />
        </div>
        <div
          className={
            player.type === "CONTRACTED"
              ? `${classes.div} ${classes.subOrContract} ${classes.highlightedType}`
              : `${classes.div} ${classes.subOrContract} `
          }
          onClick={() => setPlayer({ ...player, type: "CONTRACTED" })}
          type={"button"}
        >
          Contract
          <RiRecordCircleFill className={classes.icon} />
        </div>
      </div>

      <ExtraTypeBox player={player} setPlayer={setPlayer} />
    </div>
  );
};

export default SubOrContractBox;
