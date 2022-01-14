import Modal from "../../../../UI/modal/Modal";

import emailJS from 'emailjs-com';

import styles from "./EmailPlayer.module.css";

const EmailPlayer = (props) => {
  return (
    <Modal closeModal={props.closeModal}>
      <div>These players are nutso</div>
    </Modal>
  );
};

export default EmailPlayer;
