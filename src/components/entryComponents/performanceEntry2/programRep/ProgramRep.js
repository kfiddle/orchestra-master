import { useState, useContext } from "react";

import PiecesDropDown from "../../../piece/PiecesDropDown";
import PiecesList from "../../../../store/pieces-list";

import styles from "./ProgramRep.module.css";

const ProgramRep = () => {
  const [clickedRepDrop, setClickedRepoDrop] = useState(false);
  const { clickedPiecesList } = useContext(PiecesList);

  console.log(clickedPiecesList);

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

      <PiecesDropDown showOrHide={clickedRepDrop} />
    </div>
  );
};

export default ProgramRep;
