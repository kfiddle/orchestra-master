import { useState, useEffect } from "react";
import BigInput from "../components/input/BigInput";

const useFoneFormatter = (pObjectNumber) => {
  const [displayedFoneNumber, setDisplayedFoneNumber] = useState(pObjectNumber);

  useEffect(() => {
    if (isNaN(pObjectNumber) || pObjectNumber.length === 13) {
      return;
    } else if (pObjectNumber.length === 3 || pObjectNumber.length === 7) {
      // setFoneNumber((previous) => previous + "-");
      setDisplayedFoneNumber(pObjectNumber + "-");
    } else {
      setDisplayedFoneNumber(pObjectNumber);
    }

    // setFoneNumber(pObjectNumber);
    // console.log(pObjectNumber);
  }, [pObjectNumber]);

  //   if (
  //     (pObjectNumber.length === 3 || pObjectNumber.length === 7) &&
  //     !isNaN(pObjectNumber)
  //   ) {
  //     setFoneNumber((previous) => previous + "-");
  //   } else {
  //     setFoneNumber((previous) => pObjectNumber);
  //   }

  return displayedFoneNumber;
};

export default useFoneFormatter;
