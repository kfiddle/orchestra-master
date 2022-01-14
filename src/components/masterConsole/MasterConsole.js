import { useState, useContext } from "react";

import Performance from "./performances/Performance";
import ConsolePiece from "./performances/consolePiece/ConsolePiece";
import Roster from "../piece/roster/Roster";

import PerformancePieceList from "../../store/performance-piece-list";
import ClickedPerformance from "../../store/clicked-performance";


import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import styles from "./MasterConsole.module.css";
import ConsolePieceList from "./performances/consolePiece/ConsolePieceList";

const AllPerformances = (props) => {

  const { clickedPerformance } = useContext(ClickedPerformance);
  const [clickedPerformancePiece, setClickedPerformancePiece] = useState(null);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );

  const clickedPerformanceHandler = async (performance) => {

    props.clicked(performance);


    // const performancePiecesResponse = await PushBasic(
    //   performance,
    //   "get-pieces-on-program"
    // );
    // const ppsJsonified = await performancePiecesResponse.json();
    // setPiecesOfClickedPerformance(ppsJsonified);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={props.activePerformance === performance ? true : false}
    />
  ));

  const displayablePieces = piecesOfClickedPerformance.map((pp) => (
    <ConsolePiece
      key={pp.id}
      pp={pp}
      clicked={() => {
        setClickedPerformancePiece(pp);
      }}
      activePiece={clickedPerformancePiece === pp ? true : false}
    />
  ));



  return (
    <PerformancePieceList.Provider value={{ piecesOfClickedPerformance }}>
      <div className={styles.outerContainer}>
        <div className={styles.concertsDiv}>{displayablePerformances}</div>

        {clickedPerformance && <ConsolePieceList />}

      </div>
    </PerformancePieceList.Provider>
  );
};

export default AllPerformances;

{/* 
        <div className={styles.rosterDiv}>
          {clickedPerformancePiece && <Roster pp={clickedPerformancePiece} />}
        </div> */}