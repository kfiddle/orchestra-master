import { useState, useEffect, useContext, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import Modal from "../../../../UI/modal/Modal";
import OnePart from "../../rosterSpot/editChair/onePart/OnePart";

import AllInstruments from "../../../../../store/all-instruments";
import { ConsoleHolder } from "../../../../../store/object-holder";

import useFetch from "../../../../../hooks/useFetch";

import styles from "./AddChairBox.module.css";

const Part = () => {
  return { instrument: {}, rank: "", specialDesignate: null };
};

const AddChairBox = ({ closeModal }) => {
  const [parts, setParts] = useState([]);
  const { allInstruments } = useContext(AllInstruments);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  console.log(dashboard);

  useEffect(() => {
    const tempList = [];
    tempList.push({
      instrument: { name: null },
      rank: null,
    });
    setParts([...tempList]);
  }, []);

  const pusher = useFetch();
  const partsRef = useRef({});

  const title = dashboard.clickedPiece
    ? dashboard.clickedPiece.piece.title
    : dashboard.clickedShow.title;

  const responseHandler = (response) => {
    if (response !== "phoey") {
      closeModal();
      dispatch({ type: "refreshPICS", refreshPICS: true });
    }
  };

  const submit = async (partsList) => {
    const picToSend = {
      parts: partsList,
      showPiece: dashboard.clickedPiece ? dashboard.clickedPiece : null,
      show: !dashboard.clickedPiece ? dashboard.clickedShow : null,
    };
    const response = await pusher(picToSend, "add-pic");
    responseHandler(response);
  };

  const isValidSubmit = async () => {
    const partsOb = partsRef.current;
    const partsToSend = [];

    for (let part in partsOb) {
      let instName = partsOb[part].instName;

      let incomingRank = partsOb[part].rank;

      let rank = null;
      let specialDesignate = null;

      let rankIsDesignate = isNaN(incomingRank);

      if (
        (rankIsDesignate && incomingRank.toUpperCase() === "ASSIST") ||
        (rankIsDesignate && incomingRank.toUpperCase() === "A") ||
        (rankIsDesignate && incomingRank.toUpperCase() === "ASSISTANT")
      ) {
        specialDesignate = "a";
        rank = null;
      } else if (incomingRank > 0) {
        rank = +incomingRank;
      } else {
        rank = 1;
      }

      let officialInst = allInstruments.filter(
        (inst) => inst.name === instName.toUpperCase()
      )[0];
      if (!officialInst) {
        return;
      } else {
        partsToSend.push({ instrument: officialInst, rank, specialDesignate });
      }
    }
    submit(partsToSend);
  };

  const partDeleter = (index) => {
    let tempList = [...parts];
    tempList.splice(index, 1);
    setParts([...tempList]);
  };

  const displayableParts = parts.map((part) => (
    <OnePart
      key={parts.indexOf(part)}
      part={part}
      index={parts.indexOf(part)}
      partDeleter={partDeleter}
      parts={parts}
      setParts={setParts}
      partsRef={partsRef}
    />
  ));

  const addDoubling = () => {
    let templist = [...parts];
    templist.push({
      instrument: { name: null },
      rank: null,
    });
    setParts([...templist]);
  };

  const styleObject = {
    minHeight: "30rem",
    height: `${parts.length * 14}rem`,
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
            <div className={styles.titleDiv}>{title}</div>
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
            <button
              onClick={() => console.log(partsRef)}
              className={styles.button}
            >
              t
            </button>
          </div>
        </div>
        <button onClick={testParts}>AddStuff</button>{" "}
        <button onClick={printTestParts}>PrintTest</button>
        <div className={styles.submitDiv}>
          <button
            className={`${styles.button} ${styles.submitButton}`}
            onClick={isValidSubmit}
          >
            SUBMIT EDITS
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddChairBox;
