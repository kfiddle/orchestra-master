import { useContext, useEffect, useState } from "react";

import Possible from "./possible/Possible";
import EmailBox from "../rosterBox/rosterSpot/emailBox/EmailBox";

import { ChairsHolder } from "../../../store/object-holder";
import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./PossiblesBox.module.css";

//rosterBox has this

const PossiblesBox = () => {
  const { chairState, dispatch: chairsDispatch } = useContext(ChairsHolder);
  const { dashboard, dashDispatch } = useContext(ConsoleHolder);
  const [clickedPlayers, setClickedPlayers] = useState([]);
  const [emailClicked, setEmailClicked] = useState(false);

  useEffect(() => {
    const emptyPossibles = () => {
      setClickedPlayers([]);
      chairsDispatch({ type: "possibles", list: [] });
    };

    emptyPossibles();
  }, [dashboard.clickedPiece, dashboard.clickedShow, dashboard.chairChanged]);

  useEffect(() => setClickedPlayers([]), [chairState.chosenPic]);

  const possibles = chairState.possibles;

  const clickHandler = (player) => {
    if (clickedPlayers.includes(player)) {
      let tempList = clickedPlayers;
      tempList.splice(tempList.indexOf(player), 1);
      setClickedPlayers([...tempList]);
    } else {
      setClickedPlayers([...clickedPlayers, player]);
    }
  };

  const displayablePossibles = possibles.map((player) => (
    <Possible
      key={possibles.indexOf(player)}
      player={player}
      clickHandler={clickHandler}
      clicked={clickedPlayers.includes(player)}
    ></Possible>
  ));

  const openEmailBox = () => setEmailClicked(true);
  const closeEmailBox = () => setEmailClicked(false);

  return (
    <div className={styles.outerContainer}>
      {displayablePossibles}
      {clickedPlayers.length > 0 && (
        <button className={styles.emailButton} onClick={openEmailBox}>
          EMAIL PLAYER{clickedPlayers.length > 1 && "S"}
        </button>
      )}

      {emailClicked && (
        <EmailBox closeModal={closeEmailBox} players={clickedPlayers} />
      )}
    </div>
  );
};

export default PossiblesBox;
