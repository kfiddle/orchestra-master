const useTimeFormatter = (timeString) => {
  if (timeString != null) {
    let hours =
      timeString[0] === "0" ? parseInt(timeString[1]) : parseInt(timeString[0] + timeString[1]);
    let minutes = parseInt(timeString[3] + timeString[4]);

    return [hours, minutes];
  } return [0,0];
};

export default useTimeFormatter;
