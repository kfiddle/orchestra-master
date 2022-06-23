import { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../../store/object-holder";

import RosterSpot from "../rosterSpot/RosterSpot";

const NonStrings = () => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const stringParts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];
  const others = [];

  for (let pic of dashboard.pics) {
    if (!stringParts.includes(pic.chair.parts[0])) {
      others.push(pic);
    }
  }

  const displayableOthers = others.map((pic) => (
    <RosterSpot
      key={Math.random()}
      pic={pic}
      index={dashboard.pics.indexOf(pic)}
      //   rightClicker={rightClicker}
      //   rightClicked={rightClickedSpot === playerChair ? true : false}
      //   doubleClicker={doubleClicker}
      //   doubleClicked={doubleClickedCheck(playerChair)}
      //   fadeForOther={
      //     rightClickedSpot && rightClickedSpot !== playerChair ? true : false
      //   }
    />
  ));

  return <div>{displayableOthers}</div>;
};
export default NonStrings;
