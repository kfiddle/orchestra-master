import { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../../store/object-holder";

import RosterSpot from "../rosterSpot/RosterSpot";

import styles from "./NonStrings.module.css";

const NonStrings = ({ rightClicker, rightClickedSpot }) => {
  const [dbClickedOtherSpot, setDbClickedOtherSpot] = useState(null);
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const stringParts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];
  const others = [];

  for (let pic of dashboard.pics) {
    console.log(pic)
    if (!stringParts.includes(pic.parts[0].instrument.name)) {
      others.push(pic);
    }
  }

  const doubleClicker = (pic) => {
    if (dbClickedOtherSpot === pic) {
      setDbClickedOtherSpot(null);
    } else {
      setDbClickedOtherSpot(pic);
    }
  };

  const displayableOthers = others.map((pic) => (
    <RosterSpot
      key={Math.random()}
      pic={pic}
      index={dashboard.pics.indexOf(pic)}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === pic ? true : false}
      doubleClicker={doubleClicker}
      fadeForOther={rightClickedSpot && rightClickedSpot !== pic ? true : false}
    />
  ));

  return <div>{displayableOthers}</div>;
};
export default NonStrings;
