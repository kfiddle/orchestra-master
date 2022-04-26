import React, {
  useState,
  useEffect,
  useContext,
  Fragment,
  useRef,
  useMemo,
} from "react";

import Input from "../../../../../input/plainInput/Input";
import useGetAList3 from "../../../../../../hooks/useGetAList3";

import { ChairsHolder } from "../../../../../../store/object-holder";

import styles from "./LastNameInput.module.css";

const LastNameInput = React.memo((props) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const { chairState, dispatch } = useContext(ChairsHolder);

  const testingRef = useRef();

  const setMaybies = props.setMaybies;

  const [playersList, setReload] = useGetAList3(
    "get-all-players",
    isSubscribed
  );

  const nameTyping = (incomingFragment) => {
    let nameFragment = incomingFragment;

    if (nameFragment.length < 1) {
      setMaybies([]);
    } else {
      let fragments = playersList.filter(
        (player) =>
          player.lastName.toUpperCase().slice(0, nameFragment.length) ===
          nameFragment.toUpperCase()
      );
      setMaybies(fragments);
    }
  };

  return (
    <Fragment>
      <Input placeholder={"enter last name"} nameTyping={nameTyping} />
    </Fragment>
  );
});

export default LastNameInput;
