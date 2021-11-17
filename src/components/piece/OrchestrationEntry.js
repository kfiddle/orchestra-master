import Modal from "../UI/modal/Modal";
import classes from "./OrchestrationEntry.module.css";

const OrchestrationEntry = (props) => {
  const currentPerformancePiece = props.pp ? props.pp : "";

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>
            {currentPerformancePiece && currentPerformancePiece.piece.title}
          </h2>
        </div>
        Granulated
      </div>
    </Modal>
  );
};

export default OrchestrationEntry;
