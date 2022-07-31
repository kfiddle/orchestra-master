import { ImCross } from "react-icons/im";

import { ImCheckmark } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";

import styles from "./LogEvent.module.css";

const LogEvent = ({ logEvent }) => {
  const { date, gigOffer } = logEvent;
  const { player, show, reply } = gigOffer;

  console.log(logEvent);

  let replyMark;

  switch (reply) {
    case "ACCEPT":
      replyMark = <ImCheckmark className={styles.checkIcon} />;
      break;
    case "DECLINE":
      replyMark = <ImCross className={styles.xIcon} />;
      break;
    case "MAYBE":
      replyMark = <FaQuestion className={styles.questionIcon} />;
      break;
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.nameDiv}>
        {player.firstNameArea} {player.lastName}
      </div>
      <div className={styles.showTitleDiv}>{show.title}</div>
      <div className={styles.replyDiv}>{replyMark}</div>
    </div>
  );
};

export default LogEvent;
