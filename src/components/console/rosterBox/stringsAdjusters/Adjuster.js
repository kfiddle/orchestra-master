import { useEffect, useState } from "react";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import useFetch from "../../../../hooks/useFetch";

import styles from "./Adjuster.module.css";

const Adjuster = ({ section, count }) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);

  const pusher = useFetch();

  useEffect(() => {
    setLocalNumber(count);
  }, []);

  useEffect(() => {
    // const response = await pusher(pic, "delete-pic");



  }, [localNumber])

  const clickHandler = () => {
    if (!clicked && localNumber === 0) {
      setLocalNumber(1);
    }
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    setLocalNumber((previous) => previous + 1);
  };

  const subtractButtonClicker = () => {
    if (localNumber > 0) {
      setLocalNumber((previous) => previous - 1);
    }
  };

  let outerClassNames = !clicked ? styles.sectionDiv : styles.clickedSection;
  let buttonsClassNames = !clicked ? styles.invisible : styles.buttonsAndNumber;

  return (
    <div className={styles.outerContainer}>
      <div onClick={clickHandler} className={outerClassNames}>
        <div className={styles.nameDiv}>{section}</div>
      </div>
      <div className={buttonsClassNames}>
       <AiOutlineMinusCircle onClick={subtractButtonClicker} className={styles.button} />
        <AiOutlinePlusCircle onClick={addButtonClicker} className={styles.button}/>
        <div className={styles.numberDiv}>{localNumber}</div>
      </div>
    </div>
  );
};

export default Adjuster;
