import { useState, useEffect, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import useScoreProcessor from "../../../../hooks/useScoreProcessor";

import { InstEntryStore } from "../../../../store/form-holders";

import styles from "./Family.module.css";

const Family = ({ label, setValidFamilySub }) => {
  const [isValidEntry, setIsvalidEntry] = useState(true);
  const [localText, setLocalText] = useState([]);
  const [listToSend, setListToSend] = useState([]);
  const { pieceShow, submitClicked, setSubmitClicked, familyRef, goodToSend } =
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
      setValidFamilySub(true);
    }
  };

  useEffect(() => {
    // const sendUpScoreLines = async (scoreLinesList) => {
    //   const scoreLinesToSend = scoreLinesList.map((scoreLine) => {
    //     return {
    //       piece: pieceShow.piece,
    //       show: pieceShow.show,
    //       parts: [...scoreLine.parts],
    //     };
    //   });
    //   let response = await pusher(scoreLinesToSend, "add-scorelines");
    //   if (response !== "phoey") {
    //     setValidFamilySub(true);
    //   }
    // };

    const storeWindsBrassWithPiece = async () => {
      const pieceToSend = { ...pieceShow.piece, instrumentation: localText };
      let response = await pusher(pieceToSend, "edit-piece");
    };

    //   if (submitClicked) {
    //     const scoreLinesList = process(localText);
    //     if (scoreLinesList) {
    //       sendUpScoreLines(scoreLinesList);
    //       if (pieceShow.piece) {
    //         storeWindsBrassWithPiece();
    //       }
    //     } else {
    //       setIsvalidEntry(false);
    //     }

    //     setSubmitClicked(false);
    //   }
    // }, [submitClicked]);

    if (submitClicked) {
      const scoreLinesList = process(localText);
      if (scoreLinesList) {
        setLocalText(scoreLinesList);
        familyRef.current = true;
      }
    }

    if (!goodToSend) {
      setLocalText([]);
      familyRef.current = false;
    }

    if (goodToSend) {
      sendUpScoreLines();
    }
  }, [submitClicked, goodToSend]);

  useEffect(() => {}, []);

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
