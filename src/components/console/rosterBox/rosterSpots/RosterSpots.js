import React from "react";

import NonStrings from "./NonStrings";
import StringRosterSpots from "./StringRosterSpots";

import styles from "./RosterSpots.module.css";

const RosterSpots = React.memo((props) => {
  return (
    <div className={styles.outerContainer}>
      <NonStrings />
      <StringRosterSpots />
    </div>
  );
});

export default RosterSpots;
