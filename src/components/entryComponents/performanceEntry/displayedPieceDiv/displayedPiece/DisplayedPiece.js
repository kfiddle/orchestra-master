import { useState, useEffect } from "react";

import SetStringsButton from "./setStrings/SetStringsButton";


import WhichServer from "../../../../helperFunctions/WhichServer";
import classes from "./DisplayedPiece.module.css";

const DisplayedPiece = (props) => {
  const [stringsRequired, setStringsRequired] = useState(false);
  const { id, composerLastName, title, duration } = props.piece;

  useEffect(() => {
    const whichServer = WhichServer();

    const getIFStringsNeeded = async () => {
      try {
        let response = await fetch(whichServer + "strings-required/" + id);
        if (response.ok) {
          let answer = await response.json();
          setStringsRequired(answer);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getIFStringsNeeded();
  }, []);

  return (
    <div className={classes.pieceContainer}>
      <div className={classes.lastNameDiv}>{composerLastName}</div>
      <div className={classes.titleDiv}>{title}</div>
      <div className={classes.durationDiv}>{duration}'</div>
      {stringsRequired && <SetStringsButton stringsRequired={stringsRequired}/>}
    </div>
  );
};

export default DisplayedPiece;
