import { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../store/object-holder";

import RosterSpot from "./rosterSpot/RosterSpot";

import styles from "./RosterBox.module.css";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

const RosterBox = (props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    const getPossibles = async () => {
      const possiblesList = await PushBasic(
        dashboard.chosenPic,
        "get-possible-players"
      );
      const jsonified = await possiblesList.json();
      dispatch({ type: "possibles", list: jsonified });
    };

    if (dashboard.chosenPic) {
      getPossibles();
    }
  }, [dashboard.chosenPic]);

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  const displayableChairs = dashboard.pics.map((playerChair) => (
    <RosterSpot
      key={Math.random()}
      playerInChair={playerChair}
      index={dashboard.pics.indexOf(playerChair)}
      //   spotClicked={spotClickHandler}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === playerChair ? true : false}
      fadeForOther={
        rightClickedSpot && rightClickedSpot !== playerChair ? true : false
      }
      //   chairsReloader={chairsReloader}
    />
  ));

  return <div>{displayableChairs}</div>;
};

export default RosterBox;
