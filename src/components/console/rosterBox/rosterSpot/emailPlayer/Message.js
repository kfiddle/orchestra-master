import { useContext } from "react";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import useClockFormatter from "../../../../../hooks/useClockFormatter";

import styles from "./Message.module.css";

const Message = ({ player, displayableparts, pieces, services }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const { clickedShow } = dashboard;

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

  const pieceLines = pieces
    ? pieces.map((showPiece) => {
        const { piece } = showPiece;
        const { composerName, title } = piece;
        return <div key={piece.id} className={styles.pieceDiv}><span className={styles.span}>{composerName}: </span>{title}</div>;
      })
    : "";

  return (
    <div className={styles.outerContainer}>
      <div className={styles.section}>
        By clicking Send, you are sending the following message below to this
        email: <span className={styles.email}>{player.email}</span>
      </div>
      <div className={styles.message}>
        Hi {player.firstNameArea}, I'm writing to ask if you would be available
        to join the Erie Philharmonic for {clickedShow.title}. You would play{" "}
        {displayableparts}. Details are below.
        <div className={styles.piecesBox}>{pieceLines}</div>
        <div className={styles.servicesBox}>{serviceLines}</div>
      </div>
    </div>
  );
};

export default Message;