import { useContext } from "react";

import emailjs from "emailjs-com";

import Modal from "../../../../UI/modal/Modal";

import { ConsoleHolder } from "../../../../../store/object-holder";
import { ChairsHolder } from "../../../../../store/object-holder";

import styles from "./EmailPlayer.module.css";

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

  const displayableparts = parts.map(part => part.instrument.name + ` ${part.rank}` )
    .join(' and ');
  
  const submit = () => {
    const testContact = {
      toEmail: player.email,
      message:
        "KJ, if you get this, it means I can email from pushing a button on this app",
    };

    emailjs.send(serviceId, testTemplateId, testContact, userId);
  };

  const initialText = `Hi ${player.firstNameArea}, I'm writing to ask if you are available to join the Erie Philharmonic
  for ${clickedShow.title}, details below. You would play ${displayableparts}`

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        <div>{clickedShow.title}</div>
        <div style={{width:'100%'}}>{initialText}</div>
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
