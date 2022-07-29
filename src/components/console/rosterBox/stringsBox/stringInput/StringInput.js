import { useState, useEffect, useContext } from "react";

import NumberInput from "../../../../input/numberInput/NumberInput";

import { ConsoleHolder } from "../../../../../store/object-holder";

import useFetch from "../../../../../hooks/useFetch";

import classes from "./StringInput.module.css";

const StringInput = ({ part, count, submitted }) => {
  const [localNumber, setLocalNumber] = useState(0);
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    setLocalNumber(count);
  }, []);

 

  // useEffect(() => {
  //   if (submitted) {
  //     const sendItUp = async () => {
  //       let partAndNumber = { stringPart: part, number: localNumber };
  //       let response = await pusher(
  //         partAndNumber,
  //         "make-single-string-section-in-" + showOrPiece + "/" + idToSend
  //       );

  //       if (response !== "phoey") {
  //         dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: true });
  //       }
  //     };

  //     sendItUp();
  //   }
  // }, [submitted]);

  return (
    <div className={`${classes.control} ${classes.outerContainer}`}>
      <div className={classes.labelDiv}>
        <label className={classes.label}>{part}</label>
      </div>
      <NumberInput number={localNumber} numberSetter={setLocalNumber} />
    </div>
  );
};

export default StringInput;
