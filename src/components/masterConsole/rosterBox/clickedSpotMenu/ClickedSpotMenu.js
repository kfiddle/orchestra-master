import { useContext } from "react";

import { RosterBoxHolder } from "../../../../store/object-holder";

import Possibles from "../possibles/Possibles";

import styles from "./ClickedSpotMenu.module.css";

const ClickedSpotMenu = (props) => {
  const { listOfPossibles, doubleClickedPossible } =
    useContext(RosterBoxHolder);

  const playerInChair = props.playerInChair;

  return (
    <div className={styles.outerContainer}>

      {!playerInChair.player ? (
        <Possibles
          possibles={listOfPossibles}
          doubleClicked={doubleClickedPossible}
        />
      ) : (
        <div>help</div>
      )}
    </div>
  );
};

export default ClickedSpotMenu;
