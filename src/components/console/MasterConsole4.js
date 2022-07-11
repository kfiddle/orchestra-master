// import { useEffect, useContext } from "react";
// import { useSelector } from "react-redux";

// import Shows from "./shows/Shows";
// import Pieces from "./pieces/Pieces";

// import { ConsoleHolder } from "../../store/object-holder";

// import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

// import styles from "./MasterConsole4.module.css";
// import RosterBox from "./rosterBox/RosterBox";
// import usePushBasic from "../../hooks/usePushBasic";
// import useFetch from "../../hooks/useFetch";

// //season2 has this

// const MasterConsole4 = (props) => {
//   const { dashboard, dispatch } = useContext(ConsoleHolder);

//   const auth = useSelector((state) => state.auth);
//   const { jwtToken } = auth;


//   useEffect(() => {
//     const grabThePieces = async () => {
//       const showPieces = await PushBasic(
//         dashboard.clickedShow,
//         "get-showtunes-on-program", jwtToken
//       );
//       const jsonified = await showPieces.json();
//       dispatch({ type: "pieces", list: jsonified });
//     };

//     const grabPICSFromShow = async () => {
//       const directPICS = await PushBasic(
//         dashboard.clickedShow,
//         "get-pics-in-show",
//         jwtToken
//       );
//       const jsonified = await directPICS.json();
//       dispatch({ type: "pics", list: jsonified });
//     };

//     if (dashboard.clickedShow) {
//       grabThePieces();
//       grabPICSFromShow();
//       dispatch({ type: "clickedPiece", clickedPiece: null });
//     }

//     if (dashboard.stringNumsSubmitted) {
//       grabPICSFromShow();
//       dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: false });
//     }
//   }, [dashboard.clickedShow, dashboard.stringNumsSubmitted]);

//   return (
//     <div className={styles.outerContainer}>
//       <div className={styles.performancesDiv}>
//         <Shows />
//       </div>
//       <div>
//         <Pieces />
//       </div>
//       <div>
//         <RosterBox />
//       </div>
//     </div>
//   );
// };

// export default MasterConsole4;
