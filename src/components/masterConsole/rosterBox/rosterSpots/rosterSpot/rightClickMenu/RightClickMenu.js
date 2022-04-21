import { Fragment, useState, useEffect } from "react";
import AutoFillInput from "./autoFillInput/AutoFillInput";
import useGetAList3 from "../../../../../../hooks/useGetAList3";

import styles from "./RightClickMenu.module.css";

const RightClickMenu = (props) => {
  const [manEntryClicked, setManEntryClicked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [playersList, setReload] = useGetAList3(
    "get-all-players",
    isSubscribed
  );

  const [readyToSend, setReadyToSend] = useState(false);
  const [playerOnDeck, setPlayerOnDeck] = useState(null);

  const hasPlayer = props.hasPlayer;

  const removePlayerClicker = props.removePlayerClicker;

  useEffect(() => {
    return () => {
      setIsSubscribed(false);
    };
  }, []);

  const removeClicker = () => {
    removePlayerClicker();
  };

  const manualClicker = () => {
    if (!readyToSend) {
      setManEntryClicked(true);
    } else {
      console.log("we gonna send");
    }
  };

  const foundName = (name) => {
    if (playersList.filter((player) => player.lastName === name))
      setReadyToSend(true);
  };

  const menu = hasPlayer ? (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={removeClicker}>
        Remove Player
      </button>
      <button className={styles.button} onClick={manualClicker}>
        {readyToSend ? "Enter?" : "Manual Entry"}
      </button>
    </div>
  ) : (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={manualClicker}>
        {readyToSend ? "Enter?" : "Manual Entry"}
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
