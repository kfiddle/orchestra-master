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

  // const { chair } = pic;
  // const { player } = pic;
  // const { parts } = chair;

  const pusher = useFetch();

  console.log(parts);

  useEffect(() => {
    setPic(incomingPic);
    setParts(incomingPic.chair.parts);
    setPlayer(incomingPic.player);
  }, [incomingPic]);

  const playerName = player ? `${player.firstNameArea} ${player.lastName}` : "";

  const deleteChair = async () => {
    const response = await pusher(pic, "delete-pic");
    if (response !== "phoey") {
      closeModal();
    }
  };

  const displayableParts = parts? parts.map((part) => (
    <SinglePartAdjuster key={parts.indexOf(part)} part={part} />
  )) : [];

  const styleObject = {
    // height: `${parts.length * 17}rem`,
    height: `${2 * 17}rem`,
    width: "fitContent",
  };

  return (
    <Modal closeModal={closeModal} styleObject={styleObject}>
      <div className={styles.outerContainer}>
        <div className={styles.partsNameDiv}>
          {player && (
            <div className={styles.playerNameDiv}>
              {playerName} <TiDelete />
            </div>
          )}
          {displayableParts}

          <button className={`${styles.button} ${styles.addDoubling}`}>
            <AiOutlinePlus />
            DOUBLING
          </button>
        </div>

        <div className={styles.buttonsDiv}>
          {player && <button className={styles.button}>REMOVE PLAYER</button>}
          <button className={styles.button} onClick={deleteChair}>
            Remove Chair
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditChair;
