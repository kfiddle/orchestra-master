import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import SetStringsButton from "./setStrings/SetStringsButton";

import WhichServer from "../../../../helperFunctions/WhichServer";
import classes from "./DisplayedPiece.module.css";
import StringsNumbersBox from "./setStrings/stringsNumbersBox/StringsNumbersBox";
import { Fragment } from "react";

const stringsObject = {
  VIOLIN1: "",
  VIOLIN2: "",
  VIOLA: "",
  CELLO: "",
  BASS: "",
};

const DisplayedPiece = (props) => {
  const [stringsClicked, setStringsClicked] = useState(false);
  const [incomingStringChairs, setIncomingStringChairs] = useState([]);

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const { id, composerLastName, title, duration } = props.piece;
  const [stringNumbers, setStringNumbers] = props.stringSetters;

  useEffect(() => {
    const whichServer = WhichServer();

    const setLocalToAllStrings = () => {
      setStringNumbers({ ...stringNumbers, [title]: stringsObject });
    };

    const getIFStringsNeeded = async () => {
      try {
        let response = await fetch(
          whichServer + "get-string-chairs-in-piece/" + id,
          { headers: { Authorization: jwtToken } }
        );

        if (response.ok && response !== null) {
          let answer = await response.json();
          setIncomingStringChairs(answer);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getIFStringsNeeded();
    setLocalToAllStrings();
  }, []);

  return (
    <Fragment>
      <div className={classes.pieceContainer}>
        <div className={classes.lastNameDiv}>{composerLastName}</div>
        <div className={classes.titleDiv}>{title}</div>
        <div className={classes.durationDiv}>{duration}'</div>

        {incomingStringChairs.length > 0 && (
          <SetStringsButton setStringsClicked={setStringsClicked} />
        )}
      </div>
      {stringsClicked && (
        <StringsNumbersBox
          incomingStringChairs={incomingStringChairs}
          pieceTitle={title}
          stringNumbers={stringNumbers}
          setStringNumbers={setStringNumbers}
        />
      )}
    </Fragment>
  );
};

export default DisplayedPiece;
