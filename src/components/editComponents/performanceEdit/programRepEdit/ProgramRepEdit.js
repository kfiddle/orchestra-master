import { useState, useEffect, useContext } from "react";

import PiecesDropDownEdit from "./piecesDropDownEdit/PiecesDropDownEdit";

import DeepEqual from "../../../helperFunctions/DeepEqual";

import ShowTunesList from "../../../../store/showtunes-list";
import { ShowEditsSubmitted } from "../../../../store/submit-clicked";

import styles from "./ProgramRepEdit.module.css";

const ProgramRepEdit = () => {
  const [clickedRepDrop, setClickedRepoDrop] = useState(false);

  const { pieceToList, clickedPiecesList, showPiecesList } =
    useContext(ShowTunesList);
  const { showEditsSubmitted } = useContext(ShowEditsSubmitted);

  useEffect(() => {
    const previousList = showPiecesList.map((showtune) => showtune.piece);

    console.log(DeepEqual(clickedPiecesList[0], previousList[1]));
  }, [showEditsSubmitted]);

  const repClickHandler = () => {
    setClickedRepoDrop((previous) => !previous);
  };

  return (
    <div>
      <div className={styles.repButtonDiv}>
        <button
          onClick={repClickHandler}
          className={styles.button}
          type={"button"}
        >
          Repertoire
        </button>
      </div>

      <PiecesDropDownEdit showOrHide={clickedRepDrop} />
    </div>
  );
};

export default ProgramRepEdit;
