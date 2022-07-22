import { useState, useEffect, useContext } from "react";

import { InstEntryStore } from "../../../../store/form-holders";

import useFetch from "../../../../hooks/useFetch";

import styles from "./PercBox.module.css";

const PercBox = () => {
  const [timpsInput, setTimpsInput] = useState(0);
  const [percsInput, setPercsInput] = useState(0);
  const { pieceShow, submitClicked } = useContext(InstEntryStore);

  const pusher = useFetch();

  useEffect(() => {
    const allPercChairs = [];

    const sendUpPercChairs = async () => {
      for (let j = 1; j <= timpsInput; j++) {
        allPercChairs.push({
          piece: pieceShow.piece,
          show: pieceShow.show,
          parts: [{ instrument: { name: "TIMPANI" }, rank: j }],
        });
      }

      for (let j = 1; j <= percsInput; j++) {
        allPercChairs.push({
          piece: pieceShow.piece,
          show: pieceShow.show,
          parts: [{ instrument: { name: "PERCUSSION" }, rank: j }],
        });
      }

      const response = await pusher(allPercChairs, "add-scorelines");
    };

    if (submitClicked) {
      sendUpPercChairs();
    }
  }, [submitClicked]);

  const setTimp = (event) => {
    if (isNaN(event.target.value)) {
      return;
    } else {
      setTimpsInput(event.target.value);
    }
  };

  const setPerc = (event) => {
    if (isNaN(event.target.value)) {
      return;
    } else {
      setPercsInput(event.target.value);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>Timpani</label>
      <input className={styles.input} onChange={setTimp}></input>
      <label className={styles.label} onChange={setPerc}>
        Percussion
      </label>
      <input className={styles.input}></input>
    </div>
  );
};

export default PercBox;
