import { useState, useEffect, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import useScoreProcessor from "../../../../hooks/useScoreProcessor";

import { InstEntryStore } from "../../../../store/form-holders";

import styles from "./Family.module.css";

const Family = ({ label }) => {
  const [isValidEntry, setIsvalidEntry] = useState(true);
  const [localText, setLocalText] = useState([]);

  const { pieceShow, submitClicked, formState, dispatch } =
    useContext(InstEntryStore);

  const pusher = useFetch();
  const process = useScoreProcessor();

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

    if (pieceShow.piece) {
      const pieceToSend = { ...pieceShow.piece, instrumentation: localText };
      let response = await pusher(pieceToSend, "edit-piece");
    }
  };

  useEffect(() => {
    if (formState.goodToGo) {
      const scoreLinesList = process(localText);
      sendUpScoreLines(scoreLinesList);
    }
  }, [formState.goodToGo]);

  useEffect(() => {
    if (submitClicked) {
      const scoreLinesList = process(localText);
      console.log(scoreLinesList);
      if (scoreLinesList) {
        dispatch({ type: "familyisValid", value: true });
      } else {
        setIsvalidEntry(false);
      }
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
