import { useState, useEffect, useContext } from 'react';

import { ConsoleHolder } from '../../../../store/object-holder';

import RosterSpot from '../rosterSpot/RosterSpot';

import styles from './NonStrings.module.css';

const NonStrings = ({ rightClicker, rightClickedSpot }) => {
  const [dbClickedOtherSpot, setDbClickedOtherSpot] = useState(null);
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  // const stringParts = ["violin1", "violin2", "viola", "cello", "bass"];

  // ids of strings are 56 - 61
  const stringIds = ['56', '57', '58', '59', '60', '61'];
  const others = [];

  for (let chair of dashboard.pics) {
    if (!stringIds.includes(chair.parts[0].instId)) {
      others.push(chair);
    }
  }

  const doubleClicker = (chair) => {
    if (dbClickedOtherSpot === chair) {
      setDbClickedOtherSpot(null);
    } else {
      setDbClickedOtherSpot(chair);
    }
  };

  const displayableOthers = others.map((chair) => (
    <RosterSpot
      key={chair.id}
      chair={chair}
      index={dashboard.pics.indexOf(chair)}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === chair ? true : false}
      doubleClicker={doubleClicker}
      fadeForOther={rightClickedSpot && rightClickedSpot !== chair ? true : false}
    />
  ));

  return <div>{displayableOthers}</div>;
};
export default NonStrings;
