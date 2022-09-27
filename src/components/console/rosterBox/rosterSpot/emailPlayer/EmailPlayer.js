import { useContext } from "react";

import emailjs from "emailjs-com";

import Modal from "../../../../UI/modal/Modal";

import { ConsoleHolder } from "../../../../../store/object-holder";

import styles from "./EmailPlayer.module.css";

const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";
// const templateId = "template_xhux42i";
const testTemplateId = "template_38pylf2";

const EmailPlayer = ({ closeModal, player }) => {
  const { dashboard } = useContext(ConsoleHolder);
  const { clickedShow } = dashboard;

  const submit = () => {
    const testContact = {
      toEmail: "chris@eriephil.org",
      message:
        "CN, if you get this, it means I can email from pushing a button on this app",
    };

    emailjs.send(serviceId, testTemplateId, testContact, userId);
  };
  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        <div>{clickedShow.title}</div>
        <div></div>
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
