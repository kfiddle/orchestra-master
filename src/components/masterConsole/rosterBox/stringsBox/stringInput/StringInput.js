import { useState, useEffect } from "react";
import NumberInput from "../../../../input/numberInput/NumberInput";

import PushBasic from "../../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./StringInput.module.css";

const StringInput = (props) => {
  const [localNumber, setLocalNumber] = useState();

  const part = props.part;
  const showtune = props.showtune;
  const submitted = props.submitted;


  useEffect(() => {

    if (submitted) {
      const sendItUp = async () => {
        let partAndNumber = { stringPart: part, number: localNumber };
        let response = await PushBasic(
          partAndNumber,
          "make-single-string-section/" + showtune.id
        );
      };

      sendItUp();
    }
  }, [submitted]);

  //   const inputNumber = (event) => {
  //     if (isNaN(event.target.value)) {
  //       return;
  //     }
  //     setLocalNumber(event.target.value);
  //   };

  return (
    <div className={`${classes.control} ${classes.outerContainer}`}>
      <label>{part}</label>
      <NumberInput number={localNumber} numberSetter={setLocalNumber} />
    </div>
  );
};

export default StringInput;
