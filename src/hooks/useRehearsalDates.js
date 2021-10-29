import { useState } from "react";

import InputDateTime from "../components/input/InputDateTime";

const useRehearsalDates = (perfObject, perfOrRehearse) => {
  const [rehearsalDateInputs, setRehearsalDateInputs] = useState([]);
  const [concertDateInputs, setConcertDateInputs] = useState([]);
  const [rehearsalDatez, setRehearsalDates] = useState([]);
  const [concertDatez, setConcerDatez] = useState([]);

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
          label: "Rehearsal Date",
          index: +0,
        }}
      />
    );

    setRehearsalDateInputs(tempList);
  };

  return [rehearsalDateInputs, rehearsalDatez, clicked];
};

export default useRehearsalDates;
