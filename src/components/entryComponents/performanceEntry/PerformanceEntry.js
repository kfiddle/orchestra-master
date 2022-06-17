// import { useState } from "react";
// import Modal from "../../UI/modal/Modal";
// import PiecesList from "../../../store/pieces-list";
// import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

// import BigInput3 from "../../input/BigInput3";

// import PiecesDropDown from "../../piece/PiecesDropDown";

// import DisplayedPieces from "./displayedPieceDiv/DisplayedPieces";

// import useDates from "../../../hooks/useDates";
// import useConcertDates from "../../../hooks/useConcertDates";

// import classes from "./PerformanceEntry.module.css";
// import { SubmitPerformance } from "../../helperFunctions/pushFunctions/SubmitFunctions";

// const PerformanceEntry = (props) => {
//   const [clickedRepDrop, setClickedRepDrop] = useState(false);
//   const [clickedPiecesList, setClickedPiecesList] = useState([]);
//   const [performanceDates, setPerformanceDates] = useState([]);
//   const [stringNumbers, setStringNumbers] = useState({});

//   const [performance, setPerformance] = useState({});

//   const stringSetters = [stringNumbers, setStringNumbers];

//   const repClickHandler = () => {
//     setClickedRepDrop((previous) => !previous);
//   };

//   const submitPerformance = async (event) => {
//     event.preventDefault();

//     if (concertDates.length < 1) {
//       return;
//     }

//     let tempPerfList = [...performanceDates];
//     rehearsalDatez.forEach((rehearsalDate) => tempPerfList.push(rehearsalDate));
//     setPerformanceDates(tempPerfList);

//     SubmitPerformance(
//       performance,
//       clickedPiecesList,
//       concertDates,
//       rehearsalDatez,
//       stringNumbers,
//       props.closeModal
//     );
//   };

//   const pieceToList = (piece) => {
//     ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
//   };

//   const stateFuncs = { setPerformance, performance };

//   const [rehearsalDateInputs, rehearsalDatez, rehearsalClicked] = useDates(
//     performance,
//     "Rehearsal"
//   );

//   const [concertDateInputs, concertDates, concertClicked] =
//     useConcertDates(performance);

//   const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

//   return (
//     <PiecesList.Provider
//       value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
//     >
//       <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
//         <div className={classes.outerContainer}>
//           <form>
//             <BigInput3
//               stateFuncs={stateFuncs}
//               label="Performance Title"
//               keyName="title"
//             />

//             {concertDateInputs}

//             <div className={classes.additionalPerfButtonDiv}>
//               <button
//                 onClick={concertClicked}
//                 className={classes.button}
//                 type={"button"}
//               >
//                 Additional Performance Date(s) ?
//               </button>
//             </div>

//             <BigInput3
//               stateFuncs={stateFuncs}
//               label="Notes"
//               keyName="notes"
//               style={{ width: "100%", height: "3rem" }}
//             />

//             <div className={classes.repButtonDiv}>
//               <button
//                 onClick={repClickHandler}
//                 className={classes.button}
//                 type={"button"}
//               >
//                 Repertoire
//               </button>
//             </div>

//             <div className={classes.rehearsalButtonDiv}>
//               <button
//                 onClick={rehearsalClicked}
//                 className={classes.button}
//                 type={"button"}
//               >
//                 Rehearsal Date
//               </button>
//             </div>

//             <PiecesDropDown showOrHide={clickedRepDrop} />

//             {clickedPiecesList.length > 0 && (
//               <DisplayedPieces
//                 piecesList={clickedPiecesList}
//                 stringSetters={stringSetters}
//               />
//             )}
//             {rehearsalDateInputs}

//             <div className={classes.submitDiv}>
//               <button className={classes.button} onClick={submitPerformance}>
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </PiecesList.Provider>
//   );
// };

// export default PerformanceEntry;
