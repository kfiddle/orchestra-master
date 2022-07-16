import { useContext, useEffect, useState } from "react";

import InstrumentsList from "../../../../../../store/instruments-list";

import classes from "./ExtraType.module.css";

const winds = ["Principal", "2", "3", "4"];
const trumpets = ["Principal", "2", "3", "4"];
const horns = ["Principal", "Assistant", "2", "3", "4"];
const trombones = ["Principal", "2", "3"];
const twos = ["Principal", "2"];
const threes = ["Principal", "2", "3"];
const violin1 = ["Concertmaster", "Associate", "Section"];
const allElse = ["Principal", "Associate", "Section"];

const subRanks = ["A", "B", "C", "D"];

const ExtraTypeBox = (props) => {
  const { clickedInstrumentList } = useContext(InstrumentsList);
  const [whichContracts, setWhichContracts] = useState([]);
  const player = props.player;
  const setPlayer = props.setPlayer;

  const windInsts = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];
  const twosInsts = ["HARP", "KEYBOARD", "TIMPANI", "TUBA"];

  useEffect(() => {
    if (clickedInstrumentList.length > 0) {
      const inst = clickedInstrumentList[0].name;
      if (windInsts.includes(inst)) {
        setWhichContracts(winds);
      } else if (inst === "TROMBONE") {
        setWhichContracts(trombones);
      } else if (twosInsts.includes(inst)) {
        setWhichContracts(twos);
      } else if (inst === "VIOLIN1") {
        setWhichContracts(violin1);
      } else if (inst === "TRUMPET") {
        setWhichContracts(trumpets);
      } else if (inst === "HORN") {
        setWhichContracts(horns);
      } else if (inst === "PERCUSSION") {
        setWhichContracts(threes);
      } else {
        setWhichContracts(allElse);
      }
    }
  }, [clickedInstrumentList]);

  const setRank = (rankNumber) => {
    setPlayer({ ...player, rank: rankNumber });
  };

  const displayableContracts = whichContracts.map((chair) => (
    <button
      key={whichContracts.indexOf(chair)}
      className={
        whichContracts.indexOf(chair) === player.rank - 1
          ? classes.highlightedContract
          : classes.contractButton
      }
      onClick={() => setRank(whichContracts.indexOf(chair) + 1)}
      type={"button"}
    >
      {chair}
    </button>
  ));

  const subRankComponents = subRanks.map((rank) => (
    <button
      key={subRanks.indexOf(rank)}
      className={
        player.rank === subRanks.indexOf(rank) + 1
          ? classes.highlightedSubButton
          : classes.subButton
      }
      type={"button"}
      onClick={() => setRank(subRanks.indexOf(rank) + 1)}
    >
      {rank}
    </button>
  ));

  const subBox = <div className={classes.subBox}>{subRankComponents}</div>;

  const contractBox = (
    <div className={classes.contractBox}>{displayableContracts}</div>
  );

  return <div>{player.type === "CONTRACTED" ? contractBox : subBox}</div>;
};

export default ExtraTypeBox;
