import RosterSpot from "../components/piece/roster/rosterSpot/RosterSpot";

const useMakeRoster = (clickedPiece, partsList, clickedSpotHandler) => {
  if (clickedPiece === {}) {
    return [];
  }

  if (clickedPiece.chairsToFill) {
    let chairsToFill = clickedPiece.chairsToFill;

    return chairsToFill.map((chair) => (
      <RosterSpot
        key={Math.random()}
        pp={clickedPiece}
        chair={chair}
        index={chairsToFill.indexOf(chair)}
        spotClicked={clickedSpotHandler}
      />
    ));

    // const sections = partsList.map((section) => {
    //   let filledSection = [];
    //   for (let chair of chairsToFill) {
    //     if (chair.part === section) {
    //       filledSection.push(
    //         <RosterSpot
    //           key={Math.random()}
    //           pp={clickedPiece}
    //           chair={chair}
    //           index={chairsToFill.indexOf(chair)}
    //         />
    //       );
    //     }
    //   }
    // });
    // return sections;
  }
};

export default useMakeRoster;
