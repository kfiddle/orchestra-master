import { useContext } from "react";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import useClockFormatter from "../../../../../hooks/useClockFormatter";

import styles from "./Message.module.css";

const Message = ({ player, services, displayableparts }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const { clickedShow } = dashboard;
  const { chosenPic } = chairState;
  const { parts } = chosenPic;

  const clockFormatter = useClockFormatter();

  const serviceLines = services
    ? services.map((service) => {
        let displayEvent = "Concert";
        if (service.event === "REHEARSAL") displayEvent = "Rehearsal";
        let displayLocation = service.location
          ? service.location
          : " Location TBD";

        const date = new Date(service.date).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <div className={styles.serviceDiv} key={services.indexOf(service)}>
            <span className={styles.span}>{displayEvent}: </span>
            {date}
            {clockFormatter(service.startTime)}
            {"- " + displayLocation}
          </div>
        );
      })
    : "";

  return (
    <div className={styles.outerContainer}>
      <div className={styles.section}>
        By clicking Send, you are sending the following message below to this
        email: {player.email}
      </div>
      <div className={styles.message}>
        Hi {player.firstNameArea}, I'm writing to ask if you would be available
        to join the Erie Philharmonic for {clickedShow.title}. You would play{" "}
        {displayableparts}. Details are below.
        <div className={styles.servicesBox}>{serviceLines}</div>
      </div>
    </div>
  );
};

export default Message;
