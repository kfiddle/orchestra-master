import { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import Shows from './shows/Shows';
import Pieces from './pieces/Pieces';

import showPieces from '../../dummyData/showPieces';
import chairs from '../../dummyData/chairs';

import { ConsoleHolder } from '../../store/object-holder';

import RosterBox from './rosterBox/RosterBox';
import useFetch from '../../hooks/useFetch';
import useRequestMapping from '../../hooks/useRequestMapping';

//season2 has this

import styles from './MasterConsole5.module.css';
import useGetAList2 from '../../hooks/useGetAList2';
import useFullOrch from '../../hooks/useFullOrch';

const MasterConsole5 = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();
  const requester = useRequestMapping();

  const grabThePieces = async () => {
    // const showPieces = await pusher(
    //   dashboard.clickedShow,
    //   "get-showtunes-on-program"
    // );

    const showPieces_On_Show = showPieces.filter((showPiece) => showPiece.showId === dashboard.clickedShowId);
    if (showPieces_On_Show.length) dispatch({ type: 'showPieces', list: showPieces_On_Show });
  };

  const grabPICSFromShow = async () => {
    // const directPICS = await pusher(dashboard.clickedShow, "get-pics-in-show");
    const directPICS = chairs.filter((chair) => chair.showId === dashboard.clickedShowId);
    if (directPICS.length) dispatch({ type: 'pics', list: directPICS });
  };

  useEffect(() => {
    if (dashboard.clickedShowId || dashboard.modalClosed) {
      dispatch({ type: 'pics', list: [] });
      dispatch({ type: 'showPieces', list: [] });
      grabThePieces();
      grabPICSFromShow();
      dispatch({ type: 'modalClosed', modalClosed: false });
    }
  }, [dashboard.clickedShowId, dashboard.modalClosed]);

  useEffect(() => {
    if (dashboard.refreshPICS) {
      grabPICSFromShow();
      dispatch({ type: 'refreshPICS', refreshPICS: false });
    }
  }, [dashboard.refreshPICS]);

  useEffect(() => {
    if (dashboard.refreshPICS) {
      grabPICSFromShow();
    }
  }, [dashboard.refreshPICS]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.performancesDiv}>
        <Shows />
      </div>
      <div className={styles.piecesDiv}>
        <Pieces />
      </div>
      <div className={styles.rosterBoxDiv}>
        <RosterBox />
      </div>
    </div>
  );
};

export default MasterConsole5;
