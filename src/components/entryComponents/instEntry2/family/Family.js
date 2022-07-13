import { useState, useEffect, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import FamilyChairsSend from "./FamilyChairsSend";

import { InstEntryStore } from "../../../../store/form-holders";

import { Chair, Part } from "../Chair";

import styles from "./Family.module.css";

const Family = ({ label, chairs, setChairs, insts }) => {
  const [invalidEntry, setInvalidEntry] = useState(false);
  const [localText, setLocalText] = useState([]);
  const { pieceShow, submitClicked, setSubmitClicked } =
    useContext(InstEntryStore);

  const pusher = useFetch();

  useEffect(() => {
    const sendUpChairs = async (chairsList) => {
      let testingId = pieceShow.piece.id;
      let response = await pusher(chairsList, "add-empty-chairs/" + testingId);
    };

    const storeOrchWithPiece = async () => {
      const pieceToSend = { ...pieceShow.piece, instrumentation: localText };
      let response = await pusher(pieceToSend, "edit-piece");
    };

    if (submitClicked) {
      const chairsList = FamilyChairsSend(localText);
      sendUpChairs(chairsList);
      storeOrchWithPiece();
    }
  }, [submitClicked]);

  const handleInput = (event) => {
    let tempString = "";
    const onlyAllowed = /^[0-9a-zA-Z[\]./]+$/;
    for (let char of event.target.value) {
      if (onlyAllowed.test(char)) {
        tempString += char.toUpperCase();
      }
    }
    setLocalText(tempString);
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} onChange={handleInput}></input>
    </div>
  );
};

export default Family;
