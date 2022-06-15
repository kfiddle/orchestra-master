import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./StringsBox.module.css";

const StringsBox = (props) => {
  const [stringsChecked, setStringsChecked] = useState(true);
  const { pieceOrShow, object, submitClicked } =
    useContext(OrchEntry2FormStore);

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  useEffect(() => {
    const sendUpStrings = async () => {
      let stringParts = [
        ["VIOLIN1"],
        ["VIOLIN2"],
        ["VIOLA"],
        ["CELLO"],
        ["BASS"],
      ];
      for (let parts of stringParts) {
        let response = await PushBasic(
          {
            parts: parts,
            [pieceOrShow]: object,
          },
          "add-chair-to-" + pieceOrShow,
          jwtToken
        );
      }
    };

    if (submitClicked && stringsChecked) {
      sendUpStrings();
    }
  }, [submitClicked, stringsChecked]);

  const setStrings = (event) => {
    setStringsChecked((previous) => !previous);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.label}>Full Strings?</div>
      <input
        type={"checkBox"}
        className={classes.checkBox}
        checked={stringsChecked}
        onChange={setStrings}
      ></input>

      <div className={classes.label}>Custom</div>
      <input type={"checkBox"} className={classes.checkBox}></input>
    </div>
  );
};

export default StringsBox;
