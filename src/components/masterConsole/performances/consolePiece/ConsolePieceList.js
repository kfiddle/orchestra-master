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
  const [newPlayerInChair, setNewPlayerInChair] = useState(false);

  useEffect(() => {
    const getThePPs = async () => {
      const performancePiecesResponse = await PushBasic(
        clickedPerformance,
        "get-pieces-on-program"
      );
      const ppsJsonified = await performancePiecesResponse.json();
      setPiecesOfClickedPerformance(ppsJsonified);
    };

    if (newPlayerInChair) {
      getThePPs();
      setNewPlayerInChair(false);
    }

    getThePPs();
  }, [clickedPerformance, newPlayerInChair]);

  const clickedPerformancePieceHandler = (pp) => {
    setClickedPerformancePiece(pp);
  };

  const playerPlaced = () => {
    setNewPlayerInChair(true)
  }

  const displayablePieces = piecesOfClickedPerformance.map((pp) => (
    <ConsolePiece
      key={pp.id}
      pp={pp}
      clicked={clickedPerformancePieceHandler}
      playerPlaced={playerPlaced}
      activePiece={clickedPerformancePiece === pp ? true : false}
    />
  ));

  return (
    <Fragment>
      {displayablePieces}
    </Fragment>
  );
};

export default ConsolePieceList;
