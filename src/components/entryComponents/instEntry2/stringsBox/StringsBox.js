import { useState, useEffect, useContext } from "react";

import { InstEntryStore } from "../../../../store/form-holders";

import { strings, Part, Chair } from "../family/Chair";

import useFetch from "../../../../hooks/useFetch";

import styles from "./StringsBox.module.css";

const symInput = "12.10.8.8.5";
const popsInput = "10.8.6.6.4";
const SYM = "SYM";
const POPS = "POPS";

const StringsBox = ({ setValidStringsSub }) => {
  const [input, setInput] = useState(symInput);
  const [isValidEntry, setIsvalidEntry] = useState(true);

  const { pieceShow, submitClicked } = useContext(InstEntryStore);

  const pusher = useFetch();

  const testString = "12.2.8.7.5";
  const testList = testString.split(".");

  useEffect(() => {
    const sendUpStrings = async () => {
      const list = input.split(".");

      if (
        list.length !== 5 ||
        list.filter((el) => isNaN(el)).length > 0 ||
        list.includes("")
      ) {
        setIsvalidEntry(false);
        return;
      }

      const allStringChairs = [];
      const sections = list.map((number, index) => {
        return { name: strings[index], number };
      });

      // 10, 8, 6, 6, 4

      for (const section of sections) {
        for (let j = 1; j <= section.number; j++) {
          allStringChairs.push({
            piece: pieceShow.piece,
            show: pieceShow.show,
            parts: [{ instrument: { name: section.name }, rank: j }],
          });
        }
      }

      let response = await pusher(allStringChairs, "add-scorelines");
      if (response !== "phoey") {
        setValidStringsSub(true);
      }
    };

    if (submitClicked) {
      sendUpStrings();
    }
  }, [submitClicked]);

  const setStrings = (event) => {
    setIsvalidEntry(true);
    setInput(event.target.value);
  };

  const symClicked = input === symInput ? styles.clicked : null;
  const popsClicked = input === popsInput ? styles.clicked : null;

  const symClicker = () => {
    if (input !== symInput) {
      setInput(symInput);
    } else {
      setInput("");
    }
  };

  const popsClicker = () => {
    if (input !== popsInput) {
      setInput(popsInput);
    } else {
      setInput("");
    }
  };

  const classNames = isValidEntry ? styles.input : styles.invalid;

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>STRINGS</label>

      <button className={`${styles.button} ${symClicked}`} onClick={symClicker}>
        SYM
      </button>
      <button
        className={`${styles.button} ${popsClicked}`}
        onClick={popsClicker}
      >
        POPS
      </button>

      <input className={classNames} onChange={setStrings} value={input} />
    </div>
  );
};

export default StringsBox;
