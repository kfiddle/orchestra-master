import { useState } from "react";

import EmailPlayer from "./EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import classes from "./RosterSpot.module.css";
const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);
  let player = props.player ? props.player : "";
  let gotPlayer = player ? 0.4 : 1.0;

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
      setMailClicked(false)
  }

  console.log('here')

  return (
    <div className={classes.outerContainer} style={{ opacity: gotPlayer }}>
      {props.instrument} {player}
      <div className={classes.mailButtonDiv}>
        <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
      </div>
      {mailClicked && <EmailPlayer closeModal={closeModal}/>}
    </div>
  );
};

export default RosterSpot;
