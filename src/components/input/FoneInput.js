import { useState } from "react";
import useFoneFormatter from "../../hooks/useFoneFormatter";

import BigInput from "./BigInput";

const FoneInput = (props) => {
  const [foneNumber, setFoneNumber] = useState("");
  const { whichType, player, playerSetter, pObject } = props;

  let labelToGive = whichType === "homePhone" ? "Home Phone" : "Cell Phone";

  const populator = (event, key) => {
    if (isNaN(event.target.value)) {
      return;
    } else {
        setFoneNumber(event.target.value);
        playerSetter({ ...player, [key]: foneNumber });
    }

    // playerSetter({ ...player, [key]: event.target.value });
  };

  const inputter = { label: labelToGive, key: whichType, populator, pObject };

  return (
    <BigInput
      inputObject={{
        ...inputter,
        value:{foneNumber}
      }}
    />
  );
};

export default FoneInput;

// const formatNumber = (event) => {
//     if (isNaN(event.nativeEvent.data) || event.target.value.length === 13) {
//       return;
//     }

//     if (
//       (event.target.value.length === 3 || event.target.value.length === 7) &&
//       !isNaN(event.nativeEvent.data)
//     ) {
//       setfoneNumber((previous) => event.target.value + "-");
//     } else {
//       setfoneNumber((previous) => event.target.value);
//     }
//   };
