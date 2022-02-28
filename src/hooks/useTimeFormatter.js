const useTimeFormatter = (timeString) => {
  if (timeString != null) {
    let hours =
      timeString[0] === "0" ? timeString[1] : timeString[0] + timeString[1];
    let minutes = timeString[3] + timeString[4];

    return [hours, minutes];
  } return [' ', ' '];
};

export default useTimeFormatter;
