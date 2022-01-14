import { useContext, useState, useEffect } from "react";

import ClickedPerformance from "../../../../store/clicked-performance";

import ConsolePiece from "./ConsolePiece";
import Roster from "../../../piece/roster/Roster";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import styles from "./ConsolePiece.module.css";
import { Fragment } from "react/cjs/react.production.min";

const ConsolePieceList = (props) => {
  const { clickedPerformance } = useContext(ClickedPerformance);
  const [clickedPerformancePiece, setClickedPerformancePiece] = useState(null);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );
  const [playerInChair, setPlayerInChair] = useState(false);

  useEffect(() => {
    const getThePPs = async () => {
      const performancePiecesResponse = await PushBasic(
        clickedPerformance,
        "get-pieces-on-program"
      );
      const ppsJsonified = await performancePiecesResponse.json();
      setPiecesOfClickedPerformance(ppsJsonified);
      console.log("ran again");
    };

    if (playerInChair) {
      getThePPs();
      setPlayerInChair(false);
    }

    getThePPs();
  }, [clickedPerformance, playerInChair]);

  const clickedPerformancePieceHandler = (pp) => {
    setClickedPerformancePiece(pp);
  };

  const playerPlaced = () => {
    setPlayerInChair(true);
  };

  const displayablePieces = piecesOfClickedPerformance.map((pp) => (
    <ConsolePiece
      key={pp.id}
      pp={pp}
      clicked={clickedPerformancePieceHandler}
      activePiece={clickedPerformancePiece === pp ? true : false}
    />
  ));

  return (
    <Fragment>
      <div className={styles.piecesDiv}>{displayablePieces}</div>
      <div className={styles.rosterDiv}>
        {clickedPerformancePiece && (
          <Roster pp={clickedPerformancePiece} playerPlaced={playerPlaced} />
        )}
      </div>
    </Fragment>
  );
};

export default ConsolePieceList;
