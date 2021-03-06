import { useContext, useEffect, useState } from "react";

import InstrumentsList from "../../../store/instruments-list";
import BigInput2 from "../../input/BigInput2";

import classes from "./ExtraType.module.css";

const winds = ["Principal", "2", "3", "4"];
const trumpets = ["Principal", "2", "3", "4"];
const horns = ["Principal", "Assistant", "2", "3", "4"];
const trombones = ["Principal", "2", "3"];
const twos = ["Principal", "2"];
const threes = ["Principal", "2", "3"];

const violin1 = ["Concertmaster", "Associate", "Section"];
const otherStrings = ["Principal", "Associate", "Section"];
const allElse = ["Principal", "Associate", "Section"];

const ExtraTypeBox = (props) => {
  const { clickedInstrumentList } = useContext(InstrumentsList);
  const [whichContracts, setWhichContracts] = useState([]);

  // const contracted = props.contracted;

  const player = props.player;
  // const setter = props.setter;

  const contract = props.contract;
  const contractSetter = props.contractSetter;

  useEffect(() => {
    if (clickedInstrumentList.length > 0) {
      if (
        clickedInstrumentList[0] === "Flute" ||
        clickedInstrumentList[0] === "Oboe" ||
        clickedInstrumentList[0] === "Clarinet" ||
        clickedInstrumentList[0] === "Bassoon"
      ) {
        setWhichContracts(winds);
      } else if (clickedInstrumentList[0] === "Trombone") {
        setWhichContracts(trombones);
      } else if (
        clickedInstrumentList[0] === "Harp" ||
        clickedInstrumentList[0] === "Keyboard" ||
        clickedInstrumentList[0] === "Timpani" ||
        clickedInstrumentList[0] === "Tuba"
      ) {
        setWhichContracts(twos);
      } else if (clickedInstrumentList[0] === "Violin1") {
        setWhichContracts(violin1);
      } else if (clickedInstrumentList[0] === "Trumpet") {
        setWhichContracts(trumpets);
      } else if (clickedInstrumentList[0] === "Horn") {
        setWhichContracts(horns);
      } else if (clickedInstrumentList[0] === "Percussion") {
        setWhichContracts(threes);
      } else {
        setWhichContracts(allElse);
      }
      console.log(clickedInstrumentList[0]);
    }
  }, [clickedInstrumentList]);

  const setRank = (rankNumber) => {
    contractSetter({ ...contract, rank: rankNumber });
  };

  const displayableContracts = whichContracts.map((chair) => (
    <button
      key={whichContracts.indexOf(chair)}
      className={
        whichContracts.indexOf(chair) === contract.rank - 1
          ? classes.highlightedContract
          : classes.contractButton
      }
      onClick={() => setRank(whichContracts.indexOf(chair) + 1)}
      type={"button"}
    >
      {chair}
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

  // return <div>{contracted ? contractBox : subBox}</div>;

  return <div>{player.type === "CONTRACTED" ? contractBox : subBox}</div>;


};

export default ExtraTypeBox;
