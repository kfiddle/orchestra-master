import { useContext } from "react";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import useClockFormatter from "../../../../../hooks/useClockFormatter";
import usePushBasic from "../../../../../hooks/usePushBasic";

import styles from "./Message.module.css";

const Message = ({ player }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const { clickedShow } = dashboard;
  const { chosenPic } = chairState;
  const { parts } = chosenPic;

  const clockFormatter = useClockFormatter();

  const displayableparts = parts
    .map((part) => part.instrument.name + ` ${part.rank}`)
    .join(" and ");

  const services = usePushBasic(clickedShow, "get-full-schedule-of-show");
  let serviceLines = [];

  if (services) {
    for (let service of services) {
      let displayService = "";
      displayService += service.event;
      displayService += " " + clockFormatter(service.startTime);
      serviceLines.push(displayService);
    }
  }

  return (
    <div>
      Hi {player.firstNameArea}, I'm writing to ask if you are available to join
      the Erie Philharmonic for {clickedShow.title}, details below, blah blah
      blah. You would play {displayableparts}
      <div className={styles.servicesBox}>{serviceLines}</div>
    </div>
  );
};

export default Message;
