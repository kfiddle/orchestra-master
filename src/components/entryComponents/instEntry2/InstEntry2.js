import { useState, useEffect, useReducer } from "react";

import { InstEntryStore } from "../../../store/form-holders";

import useFetch from "../../../hooks/useFetch";

import Modal from "../../UI/modal/Modal";
import Family from "./family/Family";
import ExtrasButton from "./extras/ExtrasButton";

import styles from "./InstEntry2.module.css";
import StringsBox from "./stringsBox/StringsBox";
import PercBox from "./percBox/PercBox";

const modalStyle = {
  background: "slategrey",
  padding: "1rem",
  width: "70vw",
};

const initialState = {
  submitClicked: false,
  familyisValid: false,
  stringsIsValid: false,
  goodToGo: false,
  familyWasAccepted: false,
  stringsWasAccepted: false,
};

const reducer = (state, { type, value }) => {
  return { ...state, [type]: value };
};

const InstEntry2 = ({ closeModal, piece, show }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const {
    submitClicked,
    familyisValid,
    stringsIsValid,
    familyWasAccepted,
    stringsWasAccepted,
  } = formState;

  const [previousList, setPreviousList] = useState(null);

  const pieceShow = { show: show, piece, piece };
  const title = piece ? piece.title : show.title;
  const providerObject = { pieceShow, submitClicked, formState, dispatch };

  const pusher = useFetch();

  const submit = () => {
    dispatch({ type: "submitClicked", value: true });
  };

  useEffect(() => {
    if (familyWasAccepted && stringsWasAccepted) {
      closeModal();
    }

    return () => closeModal;
  }, [familyWasAccepted, stringsWasAccepted]);

  useEffect(() => {
    if (familyisValid && stringsIsValid) {
      dispatch({ type: "goodToGo", value: true });
    } else if (familyisValid || stringsIsValid) {
      dispatch({ type: "submitClicked", value: false });
    }
  }, [familyisValid, stringsIsValid]);

  useEffect(() => {
    const getFormerChairs = async () => {
      const chairs = await pusher(piece, "get-scorelines-in-piece");
      if (chairs.length > 0) {
        setPreviousList(chairs);
      }
    };

    if (piece) {
      getFormerChairs();
    }
  }, []);

  if (previousList) {
    return (
      <Modal closeModal={closeModal} styleObject={modalStyle}>
        This piece already has a saved orchestration. {previousList.length}
      </Modal>
    );
  } else
    return (
      <InstEntryStore.Provider value={providerObject}>
        <Modal closeModal={closeModal} styleObject={modalStyle}>
          <div className={styles.titleDiv}>{title}</div>
          <div className={styles.outerContainer}>
            <Family label={"WINDS AND BRASS"} />

            <PercBox />

            <div className={styles.extrasButtonDiv}>
              <ExtrasButton />
            </div>

            <div>
              <StringsBox />
            </div>
          </div>

          <div className={styles.submitButtonDiv}>
            <button className={styles.button} onClick={submit}>
              SUBMIT
            </button>
          </div>
        </Modal>
      </InstEntryStore.Provider>
    );
};

export default InstEntry2;
