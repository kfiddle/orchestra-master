import { useContext, useEffect, useState } from "react";

import InstrumentsList from "../../../store/instruments-list";
import BigInput2 from "../../input/BigInput2";

import classes from "./ExtraType.module.css";

const winds = ["Principal", "2", "3", "4"];
const trumpets = ["Principal", "2", "3", "4"];
const horns = ["Principal", "Assistant", "2", "3", "4"];
const trombones = ["Principal", "2", "3"];
const twos = ["Principal", "2"];

const violin1 = ["Concertmaster", "Associate", "Section"];
const otherStrings = ["Section", "Associate", "Principal"];
const allElse = ["Section", "Associate", "Principal"];

const ExtraTypeBox = (props) => {
  const { clickedInstrumentList } = useContext(InstrumentsList);
  const [whichContracts, setWhichContracts] = useState([]);

  const contracted = props.contracted;

  const state = { player: props.player, setPlayer: props.setter };

  useEffect(() => {
    if (clickedInstrumentList.length > 0) {
      if (
        clickedInstrumentList[0].name === "Flute" ||
        clickedInstrumentList[0].name === "Oboe" ||
        clickedInstrumentList[0].name === "Clarinet" ||
        clickedInstrumentList[0].name === "Bassoon"
      ) {
        setWhichContracts(winds);
      } else if (clickedInstrumentList[0].name === "Trombone") {
        setWhichContracts(trombones);
      } else if (
        clickedInstrumentList[0].name === "Harp" ||
        clickedInstrumentList[0].name === "Keyboard" ||
        clickedInstrumentList[0].name === "Timpani" ||
        clickedInstrumentList[0].name === "Tuba"
      ) {
        setWhichContracts(twos);
      } else if (clickedInstrumentList[0].name === "Violin 1") {
        setWhichContracts(violin1);
      } else if (
        clickedInstrumentList[0].name === "Violin2" ||
        clickedInstrumentList[0].name === "Viola" ||
        clickedInstrumentList[0].name === "Cello" ||
        clickedInstrumentList[0].name === "Bass"
      ) {
        setWhichContracts(otherStrings);
      } else if (clickedInstrumentList[0].name === "Trumpet") {
        setWhichContracts(trumpets);
      } else if (clickedInstrumentList[0].name === "Horn") {
        setWhichContracts(horns);
      } else {
        setWhichContracts(allElse);
      }
      console.log(clickedInstrumentList[0].name);
    }
  }, [clickedInstrumentList]);

  const displayableContracts = whichContracts.map((contract) => (
    <button
      key={whichContracts.indexOf(contract)}
      className={classes.contractButton}
      type={"button"}
    >
      {contract}
    </button>
  ));

  const subBox = (
    <div className={classes.subBox}>
      <button className={classes.subButton} type={"button"}>
        A
      </button>
      <button className={classes.subButton} type={"button"}>
        B
      </button>
      <button className={classes.subButton} type={"button"}>
        C
      </button>
      <button className={classes.subButton} type={"button"}>
        D
      </button>
    </div>
  );

  const contractBox = (
    <div className={classes.contractBox}>
      {displayableContracts}
      {/* <div className={classes.contractButtonsDiv}>{displayableContracts}</div> */}
      {/* <div className={classes.contractInputBox}>
        <BigInput2
          shebang={{
            label: "Contract Title",
            key: "contractTitle",
            state,
            style: { width: "80%" },
          }}
        />
      </div> */}
    </div>
  );

  return <div>{contracted ? contractBox : subBox}</div>;
};

export default ExtraTypeBox;
