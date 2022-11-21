import { useContext, useState } from "react";

import emailjs from "emailjs-com";

import Modal from "../../../../UI/modal/Modal";
import Message from "./Message";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import usePushBasic from "../../../../../hooks/usePushBasic";
import useServiceFormatter from "../../../../../hooks/useServiceFormatter";
import usePartFormatter from "../../../../../hooks/usePartFormatter";

import styles from "./EmailPlayer.module.css";
// import useClockFormatter from "../../../../../hooks/useClockFormatter";

const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";
// const templateId = "template_xhux42i";
const testTemplateId = "template_38pylf2";

const EmailPlayer = ({ closeModal, player }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const [attire, setAttire] = useState("");

  const { clickedShow } = dashboard;
  const { chosenPic } = chairState;
  const { parts } = chosenPic;

  const serviceFormatter = useServiceFormatter();
  const partFormatter = usePartFormatter();

  console.log(parts);

  const displayableparts = parts
    .map((part) => partFormatter(part))
    .join(" and ");

  const services = usePushBasic(clickedShow, "get-full-schedule-of-show");

  let serviceLines = [];

  if (services) {
    for (let service of services) {
      let displayService = serviceFormatter(service);
      serviceLines.push(displayService);
    }
  }

  const submit = () => {
    console.log(attire);
    const messageAndPlayer = {
      toEmail: "kenjfiddle@gmail.com",
      message_HTML: `<div>
        Hi ${
          player.firstNameArea
        }, I'm writing to ask if would be available to join
        the Erie Philharmonic for ${
          clickedShow.title
        }. You would play ${displayableparts}.
        Details are below.
        <div style="margin-top:3rem">${serviceLines.join("")}</div>
      </div>`,
    };

    emailjs.send(serviceId, testTemplateId, messageAndPlayer, userId);
  };

  const dressClicker = (dress) => setAttire(dress);

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        <div>{clickedShow.title}</div>

        {/* <div>{message_HTML}</div> */}
        <Message player={player} />

        <div className={styles.attireBox}>
          <button
            className={styles.attireButton}
            onClick={() => dressClicker("SYM")}
          >
            SYM
          </button>
          <button
            className={styles.attireButton}
            onClick={() => dressClicker("POPS")}
          >
            POPS
          </button>
          <button
            className={styles.attireButton}
            onClick={() => dressClicker("BLACK")}
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
