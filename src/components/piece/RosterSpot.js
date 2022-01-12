import { useState } from "react";

import EmailPlayer from "./EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import classes from "./RosterSpot.module.css";
const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);

  let performancePiece = props.pp;
  let part = props.chair.part;
  let player = props.chair.player ? props.chair.player: "";

  let playerOpacity = player ? 0.4 : 1.0;

 

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
      setMailClicked(false)
  }

  return (
    <div className={classes.outerContainer} style={{ opacity: playerOpacity }}>
      {part} {player}
      <div className={classes.mailButtonDiv}>
        <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
      </div>
      {mailClicked && <EmailPlayer closeModal={closeModal}/>}
    </div>
  );
};

export default RosterSpot;
