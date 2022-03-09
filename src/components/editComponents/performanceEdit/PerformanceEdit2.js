import { useEffect, useState } from "react";

import Modal from "../../UI/modal/Modal";

import BigInput3 from "../../input/BigInput3";

import ConcertsEdit from "./concertsEdit/ConcertsEdit";
import DisplayedPieces from "../../entryComponents/performanceEntry/displayedPieceDiv/DisplayedPieces";

import PerformanceStateFunctions from "../../../store/performance-state-functions";
import PiecesList from "../../../store/pieces-list";

import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import styles from "./PerformanceEdit2.module.css";
import Horloge from "../../entryComponents/performanceEntry2/horlage/Horloge";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

const PerformanceEdit2 = (props) => {
  const [performance, setPerformance] = useState(props.performance);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);

  useEffect(() => {
    const getShowTunes = async () => {
      const response = await PushBasic(performance, "get-pieces-on-program");
      if (response.ok) {
        let listOfShowTunes = await response.json();
        if (listOfShowTunes.length > 0) {
          setClickedPiecesList(listOfShowTunes);
        }
      }
    };

    getShowTunes();
  }, [performance]);

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <PerformanceStateFunctions.Provider
        value={{ setPerformance, performance }}
      >
        <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
          <div className={styles.outerContainer}>
            <form>
              <BigInput3 label="Performance Title" keyName="title" />

              <ConcertsEdit />
              <BigInput3
                label="Notes"
                keyName="notes"
                style={{ width: "100%", height: "3rem" }}
              />

              {clickedPiecesList.length > 0 && <DisplayedPieces />}
            </form>
          </div>
        </Modal>
      </PerformanceStateFunctions.Provider>
    </PiecesList.Provider>
  );
};

export default PerformanceEdit2;
