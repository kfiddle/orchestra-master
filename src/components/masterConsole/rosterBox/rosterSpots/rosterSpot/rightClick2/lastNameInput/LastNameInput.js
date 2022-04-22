import { useState, useEffect, useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";

import useGetAList3 from "../../../../../../../hooks/useGetAList3";
import Possibles from "../../../../possibles/Possibles";

import { RosterBoxHolder } from "../../../../../../../store/object-holder";

import styles from "./LastNameInput.module.css";

const LastNameInput = (props) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const [possibleNames, setPossibleNames] = useState([]);

  const [playersList, setReload] = useGetAList3(
    "get-all-players",
    isSubscribed
  );

  const nameTyping = (event) => {
    let nameFragment = event.target.value;
    if (nameFragment.length < 1) {
      setPossibleNames([]);
    } else {
      let fragments = playersList.filter(
        (player) =>
          player.lastName.toUpperCase().slice(0, nameFragment.length) ===
          nameFragment.toUpperCase()
      );
      setPossibleNames(fragments);
    }
  };

  return (
    <Fragment>
      <input
        className={styles.input}
        placeholder={"enter last name"}
        onChange={nameTyping}
      />
      {possibleNames.length > 0 && <Possibles nameMatches={possibleNames} />}
    </Fragment>
  );
};

export default LastNameInput;
