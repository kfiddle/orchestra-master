import { Fragment, useState, useContext } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

import useFetch from '../../../../hooks/useFetch';
import useCapFirst from '../../../../hooks/useCapFirst';

import players from '../../../../dummyData/players';
import { instsArr } from '../../../../dummyData/insts';

import RightClick from './rightClick/RightClick';

import { ChairsHolder } from '../../../../store/object-holder';
import { ConsoleHolder } from '../../../../store/object-holder';

import classes from './RosterSpot.module.css';
import EditChair from './editChair/EditChair';

// RosterSpots has this

const RosterSpot = function ({ chair, index, rightClicker, rightClicked, doubleClicker, doubleClicked, fadeForOther }) {
  const [mailClicked, setMailClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const { chairState, dispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDisp } = useContext(ConsoleHolder);

  const pusher = useFetch();
  const firstCap = useCapFirst();

  let { parts, playerId } = chair;
  let { rank, specialDesignate } = parts[0];

  let player = players.find((player) => player.id === playerId);
  let sectionSeat = chair.sectionSeat;

  // the ids for string instruments
  let stringPart = ['56', '57', '58', '59', '60', '61'].includes(parts[0].instId);

  let primaryPartName = instsArr.find((inst) => inst.id === parts[0].instId).name;

  let doublingParts = '';

  if (parts.length > 1) {
    doublingParts = parts.slice(1).map((part) => instsArr.find((inst) => part.instId === inst.id).abbreviation).join('/ ');
  }

  let lastName = '';

  if (player) {
    lastName = player.last;
  }

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
    setMailClicked(false);
    setEditClicked(false);
  };

  const spotClickedHandler = async () => {
    dispatch({ type: 'chosenPic', chosenPic: chair });
    rightClicker(null);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    rightClicker(chair);
    dispatch({ type: 'chosenPic', chosenPic: chair });
  };

  const doubleClickHandler = (event) => {
    event.preventDefault();
    doubleClicker(chair, index);
  };

  const removePlayerClicker = async () => {
    let response = await pusher(chair, 'remove-player-from-pic');

    if (response !== 'phoey') {
      dispatch({ type: 'chosenPic', chosenPic: null });
      dispatch({ type: 'possibles', list: [] });
      dashDisp({ type: 'refreshPICS', refreshPICS: true });
      rightClicker(null);
    }
  };

  let printSectionLabel = rank === 1 || (stringPart && sectionSeat === 0) || rightClicked ? true : false;

  let printRankOrSeat = rank;

  if (stringPart) {
    printRankOrSeat = sectionSeat + 1;
  }
  if (specialDesignate) {
    printRankOrSeat = 'A';
  }

  let marginClass = !printSectionLabel ? classes.sectionMargin : classes.sectionHeadMargin;

  let backgroundClass = classes.unHired;
  if (chairState.chosenPic === chair) {
    backgroundClass = classes.clicked;
  }
  if (player) {
    backgroundClass = classes.hired;
  }

  let fadeForOtherClass = fadeForOther ? classes.fadeForOther : null;
  let rightClickedClass = rightClicked ? classes.rightClicked : null;
  let doubleClickedClass = doubleClicked ? classes.doubleClicked : null;

  const editClicker = () => {
    setEditClicked(true);
  };

  return (
    <Fragment>
      <div
        className={` ${classes.outerContainer} ${marginClass} ${backgroundClass} ${fadeForOtherClass} ${rightClickedClass} ${doubleClickedClass}`}
        onClick={spotClickedHandler}
        onContextMenu={rightClickHandler}
        onDoubleClick={doubleClickHandler}
      >
        <div className={classes.partDiv}>{printSectionLabel && primaryPartName}</div>
        <div className={classes.rankDiv}>{printRankOrSeat}</div>

        <div className={classes.playerDiv}>{lastName}</div>

        <div className={classes.doublingDiv}>{doublingParts}</div>
        <div className={classes.editButtonDiv}>
          <FiEdit className={classes.icon} onClick={editClicker} />
        </div>

        <div className={classes.mailButtonDiv}>{/* <AiOutlineMail className={classes.icon} onClick={sendMessage} /> */}</div>
        {/* {mailClicked && <EmailPlayer closeModal={closeModal} />} */}
      </div>

      {rightClicked && <RightClick removePlayerClicker={removePlayerClicker} chair={chair} rightClicker={rightClicker} />}
      {editClicked && <EditChair closeModal={closeModal} incomingPic={chair} />}
    </Fragment>
  );
};

export default RosterSpot;
