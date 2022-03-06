const usePrintTime = (hours, minutes) => {
  let printedHours = "";
  let printedMinutes = "";

  if (hours === 0) {
    return [printedHours, printedMinutes];
  } else if (hours > 0 && minutes === 0) {
    return [hours, "00"];
  } else {
    return [hours, minutes];
  }
};

export default usePrintTime;
