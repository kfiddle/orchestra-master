import { useState } from "react";

import InputDateTime from "../components/input/InputDateTime";

const useRehearsalDates = (perfObject) => {
  const [rehearsalDateInputs, setRehearsalDateInputs] = useState([]);
  const [rehearsalDatez, setRehearsalDates] = useState([]);

  const datePopulator = (index, dateTimeObject) => {
    let tempList = [...rehearsalDatez];
    tempList[index] = dateTimeObject;
    setRehearsalDates(tempList);
  };

  const dateInputter2 = { label: "", datePopulator, pObject: perfObject };

  const clicked = () => {
    let tempList = [...rehearsalDateInputs];
    tempList.push(
      <InputDateTime
        key={Math.random()}
        inputObject={{
          ...dateInputter2,
          label: "Primary Date",
          index: +0,
        }}
      />
    );

    setRehearsalDateInputs(tempList);
  };

  return [rehearsalDateInputs, rehearsalDatez, clicked];
};

export default useRehearsalDates;
