import { useState, useEffect, useContext } from "react";

import Performance from "./performances/Performance";
import ConsolePiece from "./performances/consolePiece/ConsolePiece";

import useMakeRoster from "../../hooks/useMakeRoster";
import useMakePieces from "../../hooks/useMakePieces";

import AllParts from "../../store/all-parts";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import styles from "./MasterConsole2.module.css";

const MasterConsole2 = (props) => {
  const [clickedPerformance, setClickedPerformance] = useState({});
  const [pieces, setPieces] = useState([]);
  const [clickedPiece, setClickedPiece] = useState({});

  const partsList = useContext(AllParts);

  useEffect(() => {
    const getThePPs = async () => {
      const performancePiecesResponse = await PushBasic(
        clickedPerformance,
        "get-pieces-on-program"
      );
      const ppsJsonified = await performancePiecesResponse.json();
      setPieces(ppsJsonified);
    };

    if (clickedPerformance) {
      getThePPs();
    }
  }, [clickedPerformance, clickedPiece]);

  const clickedPerformanceHandler = (performance) => {
    setClickedPerformance(performance);
    setClickedPiece({});
  };

  const clickedPieceHandler = (piece) => {
    setClickedPiece(piece);
  };

  const clickedSpotHandler = (rosterSpot) => {
    console.log(rosterSpot);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={clickedPerformance === performance ? true : false}
    />
  ));


  const displayedPieces = useMakePieces(pieces, clickedPieceHandler);
  const displayedRoster = useMakeRoster(
    clickedPiece,
    partsList,
    clickedSpotHandler
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>{displayedPieces}</div>
      <div>{displayedRoster}</div>
      <div>{}</div>
    </div>
  );
};

export default MasterConsole2;
