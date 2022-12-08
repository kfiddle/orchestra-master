import { useState } from "react";

import LogEvent from "./LogEvent";
import LogSortHeader from "./logSortHeader/LogSortHeader";

import useGetAList2 from "../../hooks/useGetAList2";

import styles from "./LogEvents.module.css";

const sortOpts = ["date", "player", "reply", "show"];

const LogEvents = ({ reloadFlag, setReloadFlag }) => {
  const [chosenSort, setChosenSort] = useState("date");

  console.log(chosenSort);

  let logEvents = useGetAList2("get-log-events-by/" + chosenSort);

  const displayableEvents = logEvents.map((logEvent) => (
    <LogEvent key={logEvents.indexOf(logEvent)} logEvent={logEvent} />
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
