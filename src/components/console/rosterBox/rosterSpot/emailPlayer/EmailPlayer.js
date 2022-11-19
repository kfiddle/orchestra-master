import { useContext, useEffect } from "react";

import emailjs from "emailjs-com";

import Modal from "../../../../UI/modal/Modal";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import usePushBasic from "../../../../../hooks/usePushBasic";
import useDateFormatter from "../../../../../hooks/useDateFormatter";

import styles from "./EmailPlayer.module.css";
import useClockFormatter from "../../../../../hooks/useClockFormatter";

const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";
// const templateId = "template_xhux42i";
const testTemplateId = "template_38pylf2";

const EmailPlayer = ({ closeModal, player }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { chairState } = useContext(ChairsHolder);

  const { clickedShow } = dashboard;
  const { chosenPic } = chairState;
  const { parts } = chosenPic;

  const clockFormatter = useClockFormatter();

  const displayableparts = parts
    .map((part) => part.instrument.name + ` ${part.rank}`)
    .join(" and ");

  const submit = () => {
    const messageAndPlayer = {
      toEmail: player.email,
      message: 'a message ' + ' \n and one more' + `\n <h3>COME ON</h3>`,
      testHTML: '<h1>Testing</h1>'
    };

    emailjs.send(serviceId, testTemplateId, messageAndPlayer, userId);
  };

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

  const initialText = `Hi ${player.firstNameArea}, I'm writing to ask if you are available to join the Erie Philharmonic
  for ${clickedShow.title}, details below, blah blah blah. You would play ${displayableparts}



  ${serviceLines}
  `;

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        <div>{clickedShow.title}</div>
        <div style={{ width: "100%" }}>{initialText}</div>
        <div></div>
        <div className={styles.submitButtonDiv}>
          <button className={styles.button} onClick={submit}>
            SUBMIT
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EmailPlayer;
