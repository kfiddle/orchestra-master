import { useState } from "react";

import LogEvent from "./LogEvent";
import LogSortHeader from "./logSortHeader/LogSortHeader";

import styles from "./LogEvents.module.css";

const sortOpts = ["DATE", "PLAYER", "REPLY", "SHOW"];

const LogEvents = ({ events }) => {
  const [chosenSort, setChosenSort] = useState("");

  console.log(chosenSort);

  const displayableEvents = events.map((logEvent) => (
    <LogEvent key={events.indexOf(logEvent)} logEvent={logEvent} />
  ));

  return (
    <div>
      <LogSortHeader
        sortOpts={sortOpts}
        chosenSort={chosenSort}
        setChosenSort={setChosenSort}
      />
      <div className={styles.logDiv}>{displayableEvents}</div>
    </div>
  );
};

export default LogEvents;
