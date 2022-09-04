import { useState, useEffect, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import useScoreProcessor from "../../../../hooks/useScoreProcessor";

import { InstEntryStore } from "../../../../store/form-holders";

import styles from "./Family.module.css";

const Family = ({ label }) => {
  const [isValidEntry, setIsvalidEntry] = useState(true);
  const [localText, setLocalText] = useState([]);

  const { pieceShow, submitClicked, dispatch } = useContext(InstEntryStore);

  const pusher = useFetch();
  const process = useScoreProcessor();

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
      if (response !== "phoey") {
        dispatch({ type: "familyWasAccepted", value: true });
      }
    };

    const storeWindsBrassWithPiece = async () => {
      const pieceToSend = { ...pieceShow.piece, instrumentation: localText };
      let response = await pusher(pieceToSend, "edit-piece");
    };

    if (submitClicked) {
      const scoreLinesList = process(localText);
      if (scoreLinesList) {
        sendUpScoreLines(scoreLinesList);
        if (pieceShow.piece) {
          storeWindsBrassWithPiece();
        }
      } else {
        setIsvalidEntry(false);
      }

      dispatch({ type: "submitClicked", value: false });
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
