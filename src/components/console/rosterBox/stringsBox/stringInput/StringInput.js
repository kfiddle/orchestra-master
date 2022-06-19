import { useState, useEffect, useContext } from "react";

import NumberInput from "../../../../input/numberInput/NumberInput";

import { ConsoleHolder } from "../../../../../store/object-holder";

import useFetch from "../../../../../hooks/useFetch";

import classes from "./StringInput.module.css";

const StringInput = (props) => {
  const [localNumber, setLocalNumber] = useState(0);
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  const part = props.part;
  const showtune = props.showtune;
  const show = props.show;
  const submitted = props.submitted;
  const standardChecked = props.standardChecked;

  const showOrPiece = showtune ? "piece" : "show";
  const idToSend = showtune ? showtune.id : show.id;

  useEffect(() => {
    const setStringNums = () => {
      if (!standardChecked) {
        setLocalNumber(0);
        console.log("not this time");
      } else if (part === "VIOLIN1") {
        setLocalNumber(12);
      } else if (part === "VIOLIN2") {
        setLocalNumber(10);
      } else if (part === "VIOLA" || part === "CELLO") {
        setLocalNumber(8);
      } else {
        setLocalNumber(6);
      }
    };

    setStringNums();
  }, [standardChecked]);

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
        standardChecked={standardChecked}
      />
    </div>
  );
};

export default StringInput;
