import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import useGetAList3 from "../../../../../../../hooks/useGetAList3";
import Possibles from "../../../../possibles/Possibles";
import styles from "./LastNameInput.module.css";

const LastNameInput = (props) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [hintsArray, setHintsArray] = useState([]);
  // const [possibles, setNameFragment] = usePossibleNames();

  const [playersList, setReload] = useGetAList3(
    "get-all-players",
    isSubscribed
  );

  console.log(hintsArray);

  const nameTyping = (event) => {
    let nameFragment = event.target.value;

    if (nameFragment.length < 1) {
      setHintsArray([]);
    } else {
      let fragments = playersList.filter(
        (player) =>
          player.lastName.toUpperCase().slice(0, nameFragment.length) ===
          nameFragment.toUpperCase()
      );
      setHintsArray(fragments);
    }
  };
  return (
    <Fragment>
      <input
        className={styles.input}
        placeholder={"enter last name"}
        onChange={nameTyping}
      />

      {hintsArray && <Possibles possibles={hintsArray} />}
    </Fragment>
  );
};

export default LastNameInput;
