import { useState, useEffect, useContext } from "react";
import { FiDelete } from "react-icons/fi";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

import DoublingBox from "../instButton/doublingBox/DoublingBox";
import ExtrasBox from "../instButton/extrasBox/ExtrasBox";


import styles from "./Chair2.module.css";

const Chair2 = (props) => {
  const [parts, setParts] = useState([]);
  const [rank, setRank] = useState("");
  const [doublingsClicked, setDoublingsClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [extraInPlace, setExtraInPlace] = useState(false);

  const { piece, show, submitClicked } = useContext(OrchEntry2FormStore);

  const chairPartz = [parts, setParts, rank, setRank];

  const putItTogether = props.putItTogether;

  const initialRank = props.rank;
  const primaryPart = props.part;
  const specialDesignate = props.specialDesignate;

  useEffect(() => {
    setParts([primaryPart]);
    setRank(initialRank);
  }, [primaryPart]);

  useEffect(() => {
    if (submitClicked) {
      putItTogether(parts, rank);
    }
  }, [submitClicked]);

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    if (!extraInPlace) {
      setRightClicked((previous) => !previous);
    } else {
      setParts([primaryPart]);
      setRank(initialRank);
    }
  };

  const partClicker = (part) => {
    setRightClicked(false);
    setParts([part]);
    setRank(0);
    setExtraInPlace(true);
  };

  const xButtonClicker = () => {
   props.deleteClicked();
  }

  let displayedRank = rank < 1 || specialDesignate? null : rank;

  let displayedPart = specialDesignate ? specialDesignate : parts[0];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={showDoublings}
          onContextMenu={rightClickHandler}
        >
          {displayedPart} {displayedRank}
        </button>
       {specialDesignate && <FiDelete  className={styles.deleteButton} onClick={xButtonClicker} />}

      </div>

      {doublingsClicked && (
        <DoublingBox
          primaryPart={primaryPart}
          rank={rank}
          chairPartz={chairPartz}
        />
      )}

      {rightClicked && (
        <ExtrasBox primaryPart={primaryPart} partClicker={partClicker} />
      )}
    </div>
  );
};

export default Chair2;
