// import { useState, useEffect, useContext } from "react";

// import Performance from "./performances/Performance";
// import ConsolePiece from "./performances/consolePiece/ConsolePiece";
// import PossiblePlayer from "../piece/PossiblePlayer";

// import useMakeRoster from "../../hooks/useMakeRoster";
// import useMakePieces from "../../hooks/useMakePieces";

// import AllParts from "../../store/all-parts";

// import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
// import styles from "./MasterConsole2.module.css";
// import useGetPushList from "../../hooks/useGetPushList";

// const MasterConsole2 = (props) => {
//   const [clickedPerformance, setClickedPerformance] = useState({});
//   const [pieces, setPieces] = useState([]);

//   const [clickedPiece, setClickedPiece] = useState({});
//   const [clickedRosterSpot, setClickedRosterSpot] = useState({});
//   const [possiblePlayers, setPossiblePlayers] = useState([]);

//   const partsList = useContext(AllParts);
//   const performances = props.list;

//   const clickedPerformanceHandler = (performance) => {
//     setClickedPerformance(performance);
//     setClickedPiece({});

//     const getThePieces = async () => {
//       const performancePiecesResponse = await PushBasic(
//         performance,
//         "get-pieces-on-program"
//       );
//       const ppsJsonified = await performancePiecesResponse.json();
//       setPieces(ppsJsonified);
//     };

//     getThePieces();
//   };

//   const clickedPieceHandler = (piece) => {
//     setClickedPiece(piece);
//   };

//   const clickedSpotHandler = (rosterSpot) => {
//     setClickedRosterSpot(rosterSpot);
//   };

//   const displayablePerformances = performances.map((performance) => (
//     <Performance
//       key={performance.id}
//       performance={performance}
//       clicked={clickedPerformanceHandler}
//       active={clickedPerformance === performance ? true : false}
//     />
//   ));



//   const displayablePossibles = possiblePlayers
//     ? possiblePlayers.map((player) => (
//         <PossiblePlayer
//           key={possiblePlayers.indexOf(player)}
//           player={player}
//           pp={clickedPiece}
//           //   clickedIndex={clickedIndex}
//           //   playerPlaced={playerPlaced}
//         ></PossiblePlayer>
//       ))
//     : [];

//   return (
//     <div className={styles.outerContainer}>
//       <div className={styles.concertsDiv}>{displayablePerformances}</div>
//       <div className={styles.piecesDiv}>{}</div>
//       <div>{}</div>
//       <div>{displayablePossibles}</div>
//     </div>
//   );
// };

// export default MasterConsole2;
