import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import OrchestrationEntry from "./OrchestrationEntry";

import styles from "./Piece.module.css";

const Piece = (props) => {
  const { title, composer } = props.piece;
  const [orchestrationClicked, setOrchestrationClicked] = useState(false);

  const clickedPieceHandler = () => {
    props.clicked(props.piece);
  };

  const closeModal = () => {
    setOrchestrationClicked(false);
  };

  const openOrchestration = () => {
    setOrchestrationClicked(true);
  };

  return (
    <div className={styles.outerContainer} onClick={clickedPieceHandler}>
      <div className={styles.composerDiv}>{composer}</div>
      <div className={styles.titleDiv}>{title}</div>

      <div className={styles.editIcon}>
        <FiEdit onClick={openOrchestration} />
      </div>

      {orchestrationClicked && (
        <OrchestrationEntry piece={props.piece} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Piece;
