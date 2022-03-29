import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";

import styles from "./Extra.module.css";
import { icons } from "react-icons";

const originalBackground =
  "linear-gradient(to left, transparent, #eccbcb, rgb(90, 85, 85)";

const Extra = (props) => {
  const [clicked, setClicked] = useState(false);
  //   const [extras, setExtras] = props.extrasStateStuff;
  const [localNumber, setLocalNumber] = useState(0);

  const instrument = props.instrument;

  //   let tempList = extras;

  //   const addInstrument = () => {
  //     tempList.push({ parts: [instrument], rank: 1 });
  //     setExtras(tempList);
  //     setLocalNumber((previous) => previous + 1);
  //   };

  //   const subtractInstrument = () => {
  //     for (let j = 0; j < tempList.length; j++) {
  //       if (tempList[j].parts[0] === instrument) {
  //         tempList.splice(j, 1);
  //       }
  //     }
  //     setExtras(tempList);
  //   };

  const clickHandler = () => {
    setClicked((previous) => !previous);

    // if (!clicked) {
    //   addInstrument();
    // } else {
    //   subtractInstrument();
    //   setLocalNumber(0);
    // }
  };

  const addButtonClicker = () => {
    // addInstrument();
    console.log("add an instrument?");
  };

  const subtractButtonClicker = () => {
    console.log("subtract an instrument?");

    // subtractInstrument();
    // setLocalNumber((previous) => previous - 1);
  };

  let classNames = !clicked ? styles.instrumentItemDiv : styles.clickedItem;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.minusDiv}>
        <FiMinus className={styles.plusMinusSign} />
      </div>
      <div className={styles.nameDiv}>{instrument}</div>
      <div className={styles.plusDiv}>
        <FiPlus className={styles.plusMinusSign} />
      </div>
    </div>

    // <div className={styles.outerContainer}>
    //   <div onClick={clickHandler} className={classNames}>
    //       <HiOutlineMinusCircle/>
    //     <div className={styles.nameDiv}>{instrument}</div>
    //     <HiOutlinePlusCircle/>
    //   </div>
    //   {clicked && (
    //     <div style={{ color: "red", padding: ".5rem" }}>
    //       {localNumber} <button onClick={addButtonClicker}>+</button>{" "}
    //       <button onClick={subtractButtonClicker}>-</button>
    //     </div>
    //   )}
    // </div>
  );
};

export default Extra;
