import { useContext, useEffect, useState } from "react";

import InstrumentsList from "../../../../../../store/instruments-list";

import classes from "./ExtraTypeBox.module.css";

const subRanks = ["A", "B", "C", "D"];

const ExtraTypeBox = ({ player, setPlayer }) => {
  const { clickedInstrumentList } = useContext(InstrumentsList);
  const [whichContracts, setWhichContracts] = useState([]);

  // const random = (int) => {
  //   return { 1: "first", 2: "second", 3: "third" }[int];
  // };

  // const instMaps = new Map(([1, 2, 3], [4, 5, 6]), ([7, 8, 9], [10, 11, 12]));

  // console.log(instMaps.get(1));


  const configureSeats = (inst) => {
    if (["FLUTE", "OBOE", "CLARINET", "BASSOON", "TRUMPET"].includes(inst))
      return ["Principal", "2", "3", "4"];
    if (["TROMBONE", "PERCUSSION"].includes(inst))
      return ["Principal", "2", "3"];
    if (["HARP", "KEYBOARD", "TIMPANI", "TUBA"].includes(inst))
      return ["Principal", "2"];
    if (inst === "VIOLIN1") return ["Concertmaster", "Associate", "Section"];
    if (inst === "HORN") return ["Principal", "Assistant", "2", "3", "4"];
    return ["Principal", "Associate", "Section"];
  };

  useEffect(() => {
    if (clickedInstrumentList.length)
      setWhichContracts(configureSeats(clickedInstrumentList[0].name));
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

  const returnADiv = () => {
    if (player.type === "CONTRACTED")
      return <div className={classes.contractBox}>{displayableContracts}</div>;
    if (player.type === "SUB")
      return <div className={classes.subBox}>{subRankComponents}</div>;
    return "";
  };

  return <div className={classes.outerContainer}>{returnADiv()}</div>;
};

export default ExtraTypeBox;
