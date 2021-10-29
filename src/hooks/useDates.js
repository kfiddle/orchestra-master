import { useState } from "react";
import InputDateTime from "../components/input/InputDateTime";

const useDates = (perfObject, perfOrRehearse) => {
  const [dateInputs, setDateInputs] = useState([]);
  const [dates, setDates] = useState([]);

  const datePopulator = (index, dateTimeObject) => {
    let tempList = [...dates];
    tempList[index] = dateTimeObject;
    setDates(tempList);
  };

  const dateInputter2 = { label: "", datePopulator, pObject: perfObject };

  const clicked = () => {
    let tempList = [...dateInputs];
    tempList.push(
      <InputDateTime
        key={Math.random()}
        inputObject={{
          ...dateInputter2,
          label: perfOrRehearse,
          index: +0,
        }}
      />
    );
    setDateInputs(tempList);
  };

  return [dateInputs, dates, clicked];
};

export default useDates;
