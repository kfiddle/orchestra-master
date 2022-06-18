import { useState, useEffect, useContext } from "react";

import NumberInput from "../../../../input/numberInput/NumberInput";

import { ConsoleHolder } from "../../../../../store/object-holder";

import useFetch from "../../../../../hooks/useFetch";

import classes from "./StringInput.module.css";

const StringInput = (props) => {
  const [localNumber, setLocalNumber] = useState();
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
    switch (part) {
      case "VIOLIN1":
        setLocalNumber(12);
      case "VIOLIN2":
        setLocalNumber(10);
      // case "VIOLA":
      //   setLocalNumber(8);
      // case "CELLO":
      //   setLocalNumber(8);
      // case "BASS":
      //   setLocalNumber(6);
    }
  }, []);

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
