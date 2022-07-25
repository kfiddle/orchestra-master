import React, { useState, useContext, useEffect, Fragment } from "react";

import Input from "../../../../../input/plainInput/Input";

import useFetch from "../../../../../../hooks/useFetch";

import { ChairsHolder } from "../../../../../../store/object-holder";

import styles from "./LastNameInput.module.css";

const LastNameInput = (props) => {
  const { chairState, dispatch } = useContext(ChairsHolder);

  const pusher = useFetch();

  const nameTyping = async (incomingFragment) => {
    let nameFragment = incomingFragment;
    const playersList = await pusher(
      chairState.chosenPic,
      "get-all-available-players"
    );

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
