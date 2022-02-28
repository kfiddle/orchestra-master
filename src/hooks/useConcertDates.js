import { useState } from "react";
import InputDateTime from "../components/input/InputDateTime";

const useConcertDates = (perfObject) => {
  const [dates, setDates] = useState([]);

  const datePopulator = (index, dateTimeObject) => {
    let tempList = [...dates];
    tempList[index] = dateTimeObject;
    setDates(tempList);
  };

  const dateInputter2 = { label: "", datePopulator, pObject: perfObject };

  const DateInput = (label, index) => {
    return (
      <InputDateTime
        key={Math.random()}
        inputObject={{
          ...dateInputter2,
          label: label,
          index: index,
        }}
      />
    );
  };

  let initialDateInput = [DateInput("Primary Performance Date", 0)];

  const [dateInputs, setDateInputs] = useState(initialDateInput);

  const clicked = () => {
    let tempList = [...dateInputs];
    tempList.push(DateInput("Additional Performance", tempList.length));
    setDateInputs(tempList);
  };

  return [dateInputs, dates, clicked];
};

export default useConcertDates;
