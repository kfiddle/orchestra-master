import { useState, useEffect, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import FamilyChairsProcessor from "./FamilyChairsProcessor";
import FamilyScoreLinesProcessor from "./FamilyScoreLinesProcessor";

import { InstEntryStore } from "../../../../store/form-holders";

import { Chair, Part } from "../Chair";

import styles from "./Family.module.css";

const Family = ({ label, chairs, setChairs, insts }) => {
  const [isValidEntry, setIsvalidEntry] = useState(true);
  const [localText, setLocalText] = useState([]);
  const { pieceShow, submitClicked, setSubmitClicked } =
    useContext(InstEntryStore);

  const pusher = useFetch();

  useEffect(() => {
    const sendUpScoreLines = async (scoreLinesList) => {
      const scoreLinesToSend = scoreLinesList.map((scoreLine) => {
        return {
          piece: pieceShow.piece,
          show: pieceShow.show,
          parts: [...scoreLine.parts],
        };
      });
      let response = await pusher(scoreLinesToSend, "add-scorelines");
    };

    const storeWindsBrassWithPiece = async () => {
      const pieceToSend = { ...pieceShow.piece, instrumentation: localText };
      let response = await pusher(pieceToSend, "edit-piece");
    };

    if (submitClicked) {
      const scoreLinesList = FamilyScoreLinesProcessor(localText);
      scoreLinesList
        ? sendUpScoreLines(scoreLinesList)
        : setIsvalidEntry(false);
      if (pieceShow.piece) {
        storeWindsBrassWithPiece();
      }
      setSubmitClicked(false);
    }
  }, [submitClicked]);

  const handleInput = (event) => {
    setIsvalidEntry(true);
    let tempString = "";
    const onlyAllowed = /^[0-9a-zA-Z[\]./]+$/;
    for (let char of event.target.value) {
      if (onlyAllowed.test(char)) {
        tempString += char.toUpperCase();
      }
    }
    setLocalText(tempString);
  };

  const classNames = isValidEntry ? styles.input : styles.invalid;

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>{label}</label>
      <input className={classNames} onChange={handleInput}></input>
    </div>
  );
};

export default Family;
