import { useContext } from "react";

import Modal from "../../UI/modal/Modal";
import ExtrasButton from "./extras/ExtrasButton";

import { InstEntryStore } from "../../../store/form-holders";
import Family from "./family/Family";

import styles from "./InstEntry.module.css";
import StringsBox from "./stringsBox/StringsBox";

const InstEntry = (props) => {
  const modalStyle = { background: "slategrey", padding:'5rem', width: '70vw', top: '20vh' };

  const piece = props.piece;
  const show = props.show;
  const closeModal = props.closeModal;

  const pieceOrShow = piece ? "piece" : "show";
  const object = piece ? piece : show;

  const title = piece ? piece.title : show.title;

  const providerObject = { pieceOrShow };

  return (
    <InstEntryStore.Provider value={providerObject}>
      <Modal closeModal={props.closeModal} styleObject={modalStyle}>
        <div className={styles.outerContainer}>
          <Family family={"WINDS"} />
          <Family family={"BRASS"} />
          <Family family={"PERCUSSION"} />

          <div className={styles.extrasButtonDiv}>
            <ExtrasButton />
          </div>
        </div>
        <StringsBox />
      </Modal>
    </InstEntryStore.Provider>
  );
};

export default InstEntry;
