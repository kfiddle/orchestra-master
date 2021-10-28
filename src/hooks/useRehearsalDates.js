import { useState } from "react";

import InputDateTime from "../components/input/InputDateTime";

const useRehearsalDates = (perfObject) => {
  const [rehearsalDateInputs, setRehearsalDateInputs] = useState([]);

  const datePopulator = (index, dateTimeObject) => {
    let tempList = [...rehearsalDateInputs];
    tempList[index] = dateTimeObject;
    setRehearsalDateInputs(tempList);
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

  return [rehearsalDateInputs, clicked];
};

export default useRehearsalDates;
