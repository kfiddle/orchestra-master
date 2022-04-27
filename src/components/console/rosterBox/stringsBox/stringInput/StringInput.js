import { useState, useEffect, useContext } from "react";

import NumberInput from "../../../../input/numberInput/NumberInput";

import { ConsoleHolder } from "../../../../../store/object-holder";

import PushBasic from "../../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./StringInput.module.css";

const StringInput = (props) => {
  const [localNumber, setLocalNumber] = useState();
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const part = props.part;
  const showtune = props.showtune;
  const show = props.show;
  const submitted = props.submitted;

  const showOrPiece = showtune ? "piece" : "show";
  const idToSend = showtune ? showtune.id : show.id;

  useEffect(() => {
    if (submitted) {
      const sendItUp = async () => {
        let partAndNumber = { stringPart: part, number: localNumber };
        let response = await PushBasic(
          partAndNumber,
          "make-single-string-section-in-" + showOrPiece + "/" + idToSend
        );
        if (response.ok) {
          dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: true });
        }
      };

      sendItUp();
    }
  }, [submitted]);

  return (
    <div className={`${classes.control} ${classes.outerContainer}`}>
      <label>{part}</label>
      <NumberInput number={localNumber} numberSetter={setLocalNumber} />
    </div>
  );
};

export default StringInput;
