import Modal from "../../UI/modal/Modal";

import Family from "./family/Family";

import styles from "./OrchEntry2.module.css";

const mainInstruments = [
  "FLUTE",
  "OBOE",
  "CLARINET",
  "BASSOON",
  "HORN",
  "TRUMPET",
  "TROMBONE",
  "TUBA",
  "TIMPANI",
  "PERCUSSION",
  "VIOLIN1",
  "VIOLIN2",
  "VIOLA",
  "CELLO",
  "BASS",
];

const winds = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];

const OrchEntry2 = (props) => {
  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  return (
    <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
      <div className={styles.outerContainer}>
        <Family instrumentFamily={"winds"}>
          <button>HELLO</button>
          <button>GOODBYE</button>
        </Family>
        <Family instrumentFamily={"brass"}>
          <button>GOODBYE</button>
        </Family>
        <Family instrumentFamily={"percussion"}></Family>
        <Family instrumentFamily={"strings"}></Family>
      </div>
    </Modal>
  );
};

export default OrchEntry2;
