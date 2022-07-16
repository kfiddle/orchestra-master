import { useState, useEffect } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

import useFetch from "../../../../../hooks/useFetch";

import Modal from "../../../../UI/modal/Modal";

import styles from "./EditChair.module.css";
import SinglePartAdjuster from "./singlePartAdjuster/SinglePartAdjuster";

const EditChair = ({ closeModal, incomingPic }) => {
  const [pic, setPic] = useState({});
  const [parts, setParts] = useState([]);
  const [player, setPlayer] = useState({});

  const pusher = useFetch();

  console.log(parts);

  useEffect(() => {
    const initialSet = () => {
      setPic(incomingPic);
      setParts(incomingPic.chair.parts);
      setPlayer(incomingPic.player);
    };

    if (incomingPic) {
      initialSet();
    }
  }, [incomingPic]);

  const playerName = player ? `${player.firstNameArea} ${player.lastName}` : "";

  const deleteChair = async () => {
    const response = await pusher(pic, "delete-pic");
    if (response !== "phoey") {
      closeModal();
    }
  };

  const partDeleter = (index) => {
    let tempList = [...parts];
    tempList.splice(index, 1);
    console.log(tempList);
    setParts([...tempList]);
  };

  const displayableParts = parts
    ? parts.map((part, index) => (
        <SinglePartAdjuster
          key={index}
          part={part}
          index={index}
          partDeleter={partDeleter}
        />
      ))
    : [];

  const styleObject = {
    height: `${parts.length * 20}rem`,
    height: `${2 * 20}rem`,
    width: "fitContent",
  };

  return (
    <Modal closeModal={closeModal} styleObject={styleObject}>
      <div className={styles.outerContainer}>
        <div className={styles.mainForm}>
          <div className={styles.partsNameDiv}>
            {player && <div className={styles.playerNameDiv}>{playerName}</div>}
            {displayableParts}

            <button className={`${styles.button} ${styles.addDoubling}`}>
              <AiOutlinePlus />
              ADD DOUBLING
            </button>
          </div>

          <div className={styles.buttonsDiv}>
            {player && <button className={styles.button}>REMOVE PLAYER</button>}
            <button className={styles.button} onClick={deleteChair}>
              Remove Chair
            </button>
          </div>
        </div>

        <div className={styles.submitDiv}>
          <button className={`${styles.button} ${styles.submitButton}`}>
            SUBMIT EDITS
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditChair;
