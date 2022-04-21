import { Fragment, useState, useEffect } from "react";
import AutoFillInput from "./autoFillInput/AutoFillInput";
import useGetAList3 from "../../../../../../hooks/useGetAList3";

import styles from "./RightClickMenu.module.css";
import PushBasic from "../../../../../helperFunctions/pushFunctions/PushBasic";

//rosterSpot has this

const RightClickMenu = (props) => {
  const [manEntryClicked, setManEntryClicked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [playersList, setReload] = useGetAList3(
    "get-all-players",
    isSubscribed
  );

  const [playerOnDeck, setPlayerOnDeck] = useState(null);

  const hasPlayer = props.hasPlayer;
  const pic = props.pic;
  const chairsReloader = props.chairsReloader;
  const rightClicker = props.rightClicker;

  const removePlayerClicker = props.removePlayerClicker;

  useEffect(() => {
    return () => {
      setIsSubscribed(false);
    };
  }, []);

  const removeClicker = () => {
    removePlayerClicker();
  };

  const sendUpPlayer = async () => {
    console.log(playerOnDeck);
    console.log(pic);
    let response = await PushBasic(playerOnDeck, "put-player-in-pic/" + pic.id);
    if (response.ok) {
      chairsReloader(true);
      rightClicker(null);
    }
  };

  const manualClicker = () => {
    if (!playerOnDeck) {
      setManEntryClicked(true);
    } else {
      sendUpPlayer();
    }
  };

  const foundName = (name) => {
    const chosenPlayer = playersList.find((player) => player.lastName === name);
    if (chosenPlayer) {
      setPlayerOnDeck(chosenPlayer);
    }
  };

  const menu = hasPlayer ? (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={removeClicker}>
        Remove Player
      </button>
    </div>
  ) : (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={manualClicker}>
        {playerOnDeck ? "Enter?" : "Manual Entry"}
      </button>
    </div>
  );

  return (
    <Fragment>
      {menu}
      {manEntryClicked && (
        <div>
          <AutoFillInput playersList={playersList} foundName={foundName} />
        </div>
      )}
    </Fragment>
  );
};

export default RightClickMenu;
