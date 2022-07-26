import { useState, useEffect, useContext } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

import useFetch from "../../../../../hooks/useFetch";

import Modal from "../../../../UI/modal/Modal";

import styles from "./EditChair.module.css";

import SinglePartAdjuster from "./singlePartAdjuster/SinglePartAdjuster";

import { ConsoleHolder } from "../../../../../store/object-holder";

const Part = () => {
  return { instrument: {}, rank: "", specialDesignate: null };
};

const EditChair = ({ closeModal, incomingPic }) => {
  const [pic, setPic] = useState({});
  const [parts, setParts] = useState([]);

  const [displayableParts, setDisplayableParts] = useState([]);

  const [player, setPlayer] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  useEffect(() => {
    const initialSet = () => {
      setPic(incomingPic);
      setParts(incomingPic.parts);
      setPlayer(incomingPic.player);
    };

    if (incomingPic) {
      initialSet();
    }
  }, [incomingPic]);

  useEffect(() => {
    setDisplayableParts(
      parts.map((part, index) => (
        <SinglePartAdjuster
          key={index}
          part={part}
          index={index}
          partDeleter={partDeleter}
          parts={parts}
          setParts={setParts}
        />
      ))
    );
  }, [parts]);

  const playerName = player ? `${player.firstNameArea} ${player.lastName}` : "";

  const responseHandler = (response) => {
    if (response !== "phoey") {
      closeModal();
      dispatch({ type: "refreshPICS", refreshPICS: true });
    }
  };

  const submitEdits = async () => {
    parts.forEach((part) => {
      if (part.rank == null) {
        part.rank = 1;
      }
    });

    const picToSend = { ...pic, parts };
    const response = await pusher(picToSend, "edit-pic-parts");
    responseHandler(response);
  };

  const deleteChair = async () => {
    const response = await pusher(pic, "delete-pic");
    responseHandler(response);
  };

  const removePlayer = async () => {
    const response = await pusher(pic, "remove-player-from-pic");
    responseHandler(response);
  };

  const partDeleter = (index) => {
    let tempList = [...parts];
    tempList.splice(index, 1);
    setParts([...tempList]);
  };

  // const displayableParts = parts.map((part, index) => (
  //   <SinglePartAdjuster
  //     key={index}
  //     part={part}
  //     index={index}
  //     partDeleter={partDeleter}
  //     parts={parts}
  //     setParts={setParts}
  //   />
  // ));

  const addDoubling = () => {
    let templist = [...parts];
    templist.push({
      instrument: { name: null },
      rank: null,
    });
    setParts([...templist]);
  };

  const styleObject = {
    height: `${parts.length * 20}rem`,
    width: "fitContent",
  };

  const testParts = () => {
    let tempList = parts;
    tempList.push(Part());
    setParts(tempList);
    console.log(parts);
  };

  const printTestParts = () => {
    console.log(parts);
  };

  return (
    <Modal closeModal={closeModal} styleObject={styleObject}>
      <div className={styles.outerContainer}>
        <div className={styles.mainForm}>
          <div className={styles.partsNameDiv}>
            {player && <div className={styles.playerNameDiv}>{playerName}</div>}
            {displayableParts}

            <button
              className={`${styles.button} ${styles.addDoubling}`}
              onClick={addDoubling}
            >
              <AiOutlinePlus />
              ADD DOUBLING
            </button>
          </div>

          <div className={styles.buttonsDiv}>
            {player && (
              <button className={styles.button} onClick={removePlayer}>
                REMOVE PLAYER
              </button>
            )}
            <button className={styles.button} onClick={deleteChair}>
              Remove Chair
            </button>
          </div>
        </div>
        <button onClick={testParts}>AddStuff</button>{" "}
        <button onClick={printTestParts}>PrintTest</button>
        <div className={styles.submitDiv}>
          <button
            className={`${styles.button} ${styles.submitButton}`}
            onClick={submitEdits}
          >
            SUBMIT EDITS
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditChair;
