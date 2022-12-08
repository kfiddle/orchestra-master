import { useContext, useState } from "react";

import emailjs from "emailjs-com";

import Modal from "../../../../UI/modal/Modal";
import Message from "./Message";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import usePushBasic from "../../../../../hooks/usePushBasic";
import useFetch from "../../../../../hooks/useFetch";
import useServiceFormatter from "../../../../../hooks/useServiceFormatter";
import usePartFormatter from "../../../../../hooks/usePartFormatter";

import styles from "./EmailPlayer.module.css";

const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";
// const templateId = "template_xhux42i";
const testTemplateId = "template_38pylf2";

const EmailPlayer = ({ closeModal, player }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const [attire, setAttire] = useState("");

  const { clickedShow, pieces } = dashboard;
  const { chosenPic } = chairState;
  const { parts } = chosenPic;

  const serviceFormatter = useServiceFormatter();
  const partFormatter = usePartFormatter();
  const pusher = useFetch();

  const displayableparts = parts
    .map(
      (part) => `<span style='font-weight:bold'>${partFormatter(part)}</span>`
    )
    .join(" and ");

  const services = usePushBasic(clickedShow, "get-full-schedule-of-show");

  let serviceLines = [];
  let pieceLines = [];

  if (services) {
    for (let service of services) {
      let displayService = serviceFormatter(service);
      serviceLines.push(displayService);
    }
  }

  if (pieces) {
    for (let showPiece of pieces) {
      const { piece } = showPiece;
      const { composerName, title } = piece;

      pieceLines.push(
        `<tr><td style='font-weight:bold'>${composerName}: </td>
        <td>${title}</td>
        </tr>`
      );
    }
  }

  const submit = () => {
    let dressToSend =
      "Men: Black Tux, Black bow tie, etc...<br> Women: Black dress, etc...";
    if (attire === "SYM")
      dressToSend = "Men: Tails, etc...<br> Women: Black dress, etc..";
    else if (attire === "BLACK")
      dressToSend = "Men: Black everything, Women: also, black everything";

    const messageAndPlayer = {
      toEmail: 'kenjfiddle@gmail.com',
      message_HTML: `<div>
        Hi ${
          player.firstNameArea
        }, I'm writing to ask if you would be available to join
        the Erie Philharmonic for ${
          clickedShow.title
        }. You would play ${displayableparts}.
        Details are below.
        <table style="margin:2rem">${pieceLines.join("")}</table>
        <table style="margin:2rem">${serviceLines.join("")}</table>
        <p style='font-weight:bold'>Attire:</p>
        <div style="margin-left: 1rem">${dressToSend}</div>
      </div>`,
    };

    emailjs.send(serviceId, testTemplateId, messageAndPlayer, userId).then(
      (result) => {
        if (result.text === "OK") {
          saveGigOffer();
          closeModal();
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const saveGigOffer = async () => {
    let gigOffer = { show: clickedShow, player };
    // console.log(gigOffer);

    let offerSaved = await pusher(gigOffer, "make-gig-offer");
    if (offerSaved != "phooey") console.log(offerSaved);
  };

  const dressClicker = (dress) => () =>
    dress === attire ? setAttire("") : setAttire(dress);

  const dressStyles = (dress) =>
    dress === attire ? styles.clickedDress : styles.attireButton;

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        <div className={styles.title}>Email Player</div>
        <Message
          player={player}
          parts={parts}
          pieces={pieces}
          services={services}
        />

        <div className={styles.attireBox}>
          <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Required Dress:
          </p>
          <button className={dressStyles("SYM")} onClick={dressClicker("SYM")}>
            SYM
          </button>
          <button
            className={dressStyles("POPS")}
            onClick={dressClicker("POPS")}
          >
            POPS
          </button>
          <button
            className={dressStyles("BLACK")}
            onClick={dressClicker("BLACK")}
          >
            BLACK
          </button>
        </div>
        <div className={styles.submitButtonDiv}>
          <button className={styles.button} onClick={submit}>
            SEND EMAIL
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EmailPlayer;
