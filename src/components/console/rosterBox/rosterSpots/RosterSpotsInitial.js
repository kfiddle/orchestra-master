// import { Fragment, useContext } from "react";

// import { ConsoleHolder } from "../../../../store/object-holder";

// const RosterSpotsInitial = () => {
//   const { dashboard, dispatch } = useContext(ConsoleHolder);

//   const stringParts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];

//   const strings = [];
//   const others = [];

//   for (let pic of dashboard.pics) {
//     if (stringParts.includes(pic.chair.parts[0])) {
//       strings.push(pic);
//     } else {
//       others.push(pic);
//     }
//   }

//   const displayableOthers = others.map((pic) => (
//     <RosterSpot
//       key={Math.random()}
//       playerInChair={playerChair}
//       index={dashboard.pics.indexOf(playerChair)}
//       rightClicker={rightClicker}
//       rightClicked={rightClickedSpot === playerChair ? true : false}
//       doubleClicker={doubleClicker}
//       doubleClicked={doubleClickedCheck(playerChair)}
//       fadeForOther={
//         rightClickedSpot && rightClickedSpot !== playerChair ? true : false
//       }
//     />
//   ));

//   return <Fragment></Fragment>;
// };

// export default RosterSpotsInitial;
