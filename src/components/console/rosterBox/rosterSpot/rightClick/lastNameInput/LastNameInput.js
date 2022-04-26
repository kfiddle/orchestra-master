import React, { useState, useContext, useEffect, Fragment } from "react";

import Input from "../../../../../input/plainInput/Input";
import useGetAList3 from "../../../../../../hooks/useGetAList3";

import { ChairsHolder } from "../../../../../../store/object-holder";

import styles from "./LastNameInput.module.css";

const LastNameInput = (props) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const { chairState, dispatch } = useContext(ChairsHolder);

  const [playersList, setReload] = useGetAList3(
    "get-all-players",
    isSubscribed
  );

  useEffect(() => {
    return () => {
      setIsSubscribed(false);
    };
  }, []);

  const nameTyping = (incomingFragment) => {
    let nameFragment = incomingFragment;

    if (nameFragment.length < 1) {
      dispatch({ type: "possibles", list: [] });
    } else {
      let fragments = playersList.filter(
        (player) =>
          player.lastName.toUpperCase().slice(0, nameFragment.length) ===
          nameFragment.toUpperCase()
      );
      dispatch({ type: "possibles", list: fragments });
    }
  };

  return (
    <Fragment>
      <Input placeholder={"enter last name"} nameTyping={nameTyping} />
    </Fragment>
  );
};

export default LastNameInput;
