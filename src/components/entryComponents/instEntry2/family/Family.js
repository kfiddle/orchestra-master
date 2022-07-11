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

    if (submitClicked) {
      const chairsList = FamilyChairsSend(localText);
      sendUpChairs(chairsList);
      console.log(chairsList);
      setSubmitClicked(false);
    }

    console.log(pieceShow);
  }, [submitClicked]);


  const handleInput = (event) => {
    const initialText = event.target.value;
    const textNoDashes = initialText.replace(/-/g, "");
    setLocalText(textNoDashes.replace(/\s+/g, "").toUpperCase());
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} onChange={handleInput}></input>
    </div>
  );
};

export default Family;
