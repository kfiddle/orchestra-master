import { useContext } from "react";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import useClockFormatter from "../../../../../hooks/useClockFormatter";
import usePartFormatter from "../../../../../hooks/usePartFormatter";

import styles from "./Message.module.css";

const Message = ({ players, parts, pieces, services }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const { clickedShow } = dashboard;

  const clockFormatter = useClockFormatter();
  const partFormatter = usePartFormatter();

  const partsLines = parts.map((part) => (
    <span key={parts.indexOf(part)} style={{ fontWeight: "bold" }}>
      {partFormatter(part)}{" "}
      {parts.length > 1 && parts.indexOf(part) < parts.length - 1 && " and "}
    </span>
  ));

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
        return (
          <div key={piece.id} className={styles.pieceDiv}>
            <span className={styles.span}>{composerName}: </span>
            {title}
          </div>
        );
      })
    : "";

  const printableEmails = players.map((player) => (
    <p key={player.id} className={styles.email}>
      {player.firstNameArea} {player.lastName}
    </p>
  ));
  const willBeSent =
    players.length === 1 ? " this player: " : " each of these players: ";

  return (
    <div className={styles.outerContainer}>
      <div className={styles.section}>
        By clicking Send, you are sending the following message to
        {/* this email:{" "}
        <span className={styles.email}>{printableEmails}</span> */}
        {willBeSent}
        {printableEmails}
      </div>
      <div className={styles.message}>
        Hi {`{player's name}`}, I'm writing to ask if you would be available to
        join the Erie Philharmonic for {clickedShow.title}. You would play{" "}
        {partsLines}. Details are below.
        <div className={styles.piecesBox}>{pieceLines}</div>
        <div className={styles.servicesBox}>{serviceLines}</div>
      </div>
    </div>
  );
};

export default Message;
