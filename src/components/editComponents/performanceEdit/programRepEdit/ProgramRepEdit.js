import { useState } from "react";

import PiecesDropDownEdit from "./piecesDropDownEdit/PiecesDropDownEdit";
import styles from "./ProgramRepEdit.module.css";

const ProgramRepEdit = () => {
  const [clickedRepDrop, setClickedRepoDrop] = useState(false);

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
