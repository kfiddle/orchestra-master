import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import OrchestrationEntry2 from "./OrchestrationEntry2";

import styles from "./Piece.module.css";

const Piece = (props) => {
  const { piece } = props.pp;
  const { title, composer } = piece;
  const [orchestrationClicked, setOrchestrationClicked] = useState(false);

  const clickedPieceHandler = () => {
    props.clicked(props.pp);
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
        <OrchestrationEntry2 piece={props.piece} pp={props.pp} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Piece;
