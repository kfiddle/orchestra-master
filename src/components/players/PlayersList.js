import { Fragment, useState } from 'react';

import players from '../../dummyData/players';

import Player from './Player';
import InstrumentsSidebar from '../instrumentsSidebar/InstrumentsSidebar';

import useFetch from '../../hooks/useFetch';

import styles from './PlayersList.module.css';
import GetAList from '../helperFunctions/GetAList';

const PlayersList = ({ possibleEdit }) => {
  const [subsByInst, setSubsByList] = useState([]);
  const [chosenInstId, setChosenInstId] = useState('');

  const pusher = useFetch();
  console.log(players);

  const clickedPlayerHandler = (player) => {
    console.log(player.last);
  };

  const possibleEditor = () => {
    possibleEdit();
  };

  const instChooser = async (instId) => {
    setChosenInstId(instId);

    // const allSubsOfInstrumentResponse = await pusher(instId, 'subs-by-instrument');
    // const subs = players.filter(player => player.insts.includes(inst => chosenInst))
    const subs = players.filter((player) => player.type === 'sub' && player.insts.some((inst) => inst.id === instId));
    setSubsByList(subs);
  };

  const playersToDisplay = subsByInst.map((player) => (
    <Player key={player.id} player={player} clicked={clickedPlayerHandler} possibleEdit={possibleEditor} />
  ));

  return (
    <div className={styles.outerContainer}>
      <InstrumentsSidebar instChooser={instChooser} chosenInstId={chosenInstId} />
      <div className={styles.playersDiv}>
        <div>{playersToDisplay}</div>
      </div>
    </div>
  );
};

export default PlayersList;
