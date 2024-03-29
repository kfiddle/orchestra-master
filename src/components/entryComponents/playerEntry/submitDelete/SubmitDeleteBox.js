import classes from "./SubmitDeleteBox.module.css";

const SubmitDeleteBox = ({ object }) => {
  const { submitPlayer, deleteClicked, deleteClickHandler, ifPlayer } = object;

  return (
    <div className={classes.buttonDiv}>
      <button className={classes.button} onClick={submitPlayer}>
        Submit Player
      </button>

      {ifPlayer && (
        <button className={classes.deleteButton} onClick={deleteClickHandler}>
          {!deleteClicked ? "Remove Player" : "Are You Sure?"}
        </button>
      )}
    </div>
  );
};

export default SubmitDeleteBox;
