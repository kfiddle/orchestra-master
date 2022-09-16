import { useState, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";

import { ChairsHolder, ConsoleHolder } from "../../../../store/object-holder";

import EmailPlayer from "../../rosterBox/rosterSpot/emailPlayer/EmailPlayer";

import classes from "./Possible.module.css";

const Possible = ({ player }) => {
  const { chairState, dispatch: chairsDispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDispatch } = useContext(ConsoleHolder);
  const [mailClicked, setMailClicked] = useState(false);

  const pusher = useFetch();

  const { firstNameArea, lastName } = player;

  let outerContainerClass = classes.unclickedItem;

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
    setMailClicked(false);
  };

  const doubleClickHandler = async () => {
    let response = await pusher(
      player,
      "put-player-in-pic/" + chairState.chosenPic.id
    );
    if (response !== "phoey") {
      dashDispatch({ type: "refreshPICS", refreshPICS: true });
      chairsDispatch({ type: "possibles", list: [] });
    }
  };

  return (
    <div
      className={`${classes.outerContainer} ${outerContainerClass}`}
      onDoubleClick={doubleClickHandler}
    >
      <div className={classes.nameDiv}>
        {firstNameArea} {lastName}{" "}
      </div>
      <div className={classes.mailButtonDiv}>
        <AiOutlineMail className={classes.icon} onClick={sendMessage} />
      </div>
      {mailClicked && <EmailPlayer closeModal={closeModal} player={player} />}
    </div>
  );
};

export default Possible;
