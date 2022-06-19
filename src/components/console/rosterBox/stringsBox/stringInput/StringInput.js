import { useState, useEffect, useContext } from "react";

import NumberInput from "../../../../input/numberInput/NumberInput";

import { ConsoleHolder } from "../../../../../store/object-holder";

import useFetch from "../../../../../hooks/useFetch";

import classes from "./StringInput.module.css";

const StringInput = (props) => {
  const [localNumber, setLocalNumber] = useState(0);
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  const partObject = props.partObject;
  const { part, sym, pops } = partObject;
  const showtune = props.showtune;
  const show = props.show;
  const submitted = props.submitted;

  const symChecked = props.symChecked;
  const popsChecked = props.popsChecked;

  const showOrPiece = showtune ? "piece" : "show";
  const idToSend = showtune ? showtune.id : show.id;

  useEffect(() => {
    const setStringNums = () => {
      if (!symChecked && !popsChecked) {
        setLocalNumber(0);
      } else if (symChecked) {
        setLocalNumber(sym);
      } else if (popsChecked) {
        setLocalNumber(pops);
      }
    };

    setStringNums();
  }, [symChecked, popsChecked]);

  useEffect(() => {
    if (submitted) {
      const sendItUp = async () => {
        let partAndNumber = { stringPart: part, number: localNumber };
        let response = await pusher(
          partAndNumber,
          "make-single-string-section-in-" + showOrPiece + "/" + idToSend
        );

        if (response !== "phoey") {
          dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: true });
        }
      };

      sendItUp();
    }
  }, [submitted]);

  return (
    <div className={`${classes.control} ${classes.outerContainer}`}>
      <div className={classes.labelDiv}>
        <label className={classes.label}>{part}</label>
      </div>
      <NumberInput
        number={localNumber}
        numberSetter={setLocalNumber}
        checked={symChecked}
      />
    </div>
  );
};

export default StringInput;
