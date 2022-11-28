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

  //   `<div>
  //   Hi ${
  //     player.firstNameArea
  //   }, I'm writing to ask if you would be available to join
  //   the Erie Philharmonic for ${
  //     clickedShow.title
  //   }. You would play ${displayableparts}.
  //   Details are below.
  //   <div style="margin:2rem">${serviceLines.join("")}</div>
  //   <p style='font-weight:bold'>Attire:</p>
  //   <div style="margin-left: 1rem">${dressToSend}</div>
  // </div>`,

  return (
    <div>
      By clicking Send, you are sending the message below to this email: {player.email}. Hi{" "}
      {player.firstNameArea}, I'm writing to ask if you would be available to
      join the Erie Philharmonic for {clickedShow.title}. You would play{" "}
      {displayableparts}. Details are below.
      <div className={styles.servicesBox}>{serviceLines}</div>
    </div>
  );
};

export default Message;
