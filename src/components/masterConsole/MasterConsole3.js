// import { useState, useReducer } from "react";

// import Performances from "./performances/Performances";
// import Pieces from "./pieces/Pieces";
// import RosterBox from "./rosterBox/RosterBox";

// import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

// import { MasterConsole3Holder } from "../../store/object-holder";

// import styles from "./MasterConsole3.module.css";

// const initialState = 0;

// const reducerFunction = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//   }
// };

// //season2 has this

// const MasterConsole3 = (props) => {
//   const [count, dispatch] = useReducer(reducerFunction, initialState);

//   const allPerformances = props.allPerformances;
//   const [pieces, setPieces] = useState([]);
//   const [clickedPiece, setClickedPiece] = useState(null);
//   const [directPICS, setDirectPICS] = useState([]);
//   const [clickedShow, setClickedShow] = useState(null);

//   const randomArray = [1, 2, 3, 4];
//   const reducer = (total, number) => total + number;
//   const bigTotal = randomArray.reduce(reducer);
//   console.log(reducer(5, 7));

//   const clickedPerformanceHandler = async (performance) => {
//     const performancePiecesResponse = await PushBasic(
//       performance,
//       "get-showtunes-on-program"
//     );
//     setClickedShow(performance);
//     const ppsJsonified = await performancePiecesResponse.json();
//     setPieces(ppsJsonified);
//     setClickedPiece(null);

//     const getPICSDirectFromShow = await PushBasic(
//       performance,
//       "get-pics-in-show"
//     );
//     const picsListedOut = await getPICSDirectFromShow.json();
//     setDirectPICS(picsListedOut);
//   };

//   const clickedPieceHandler = async (piece) => {
//     setClickedPiece(piece);
//   };

//   return (
//     <div className={styles.outerContainer}>
//       {/* <button onClick={() => dispatch('increment')}>add</button>
//       <button onClick={() => dispatch('decrement')}>subtract</button>
//       <button onClick={() => dispatch('reset')}>reset</button>
//       <div><h1 style={{color: }}>{count}</h1></div> */}
//       <div className={styles.performancesDiv}>
//         <Performances
//           allPerformances={allPerformances}
//           clicked={clickedPerformanceHandler}
//         />
//       </div>
//       <div className={styles.piecesDiv}>
//         {pieces.length > 0 && (
//           <Pieces pieces={pieces} clicked={clickedPieceHandler} />
//         )}
//       </div>
//       <div className={styles.RosterBoxDiv}>
//         {clickedPiece && <RosterBox piece={clickedPiece} />}

//         {/* below is for when seats correlate directly with show, NOT with piece */}
//         {directPICS.length > 0 && (
//           <RosterBox directList={directPICS} show={clickedShow} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default MasterConsole3;
