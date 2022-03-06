import useTimeFormatter from "./useTimeFormatter";

const useInitialTimeNums = (horloge) => {
  let startTime = horloge ? horloge.startTime : null;
  let endTime = horloge ? horloge.endTime : null;

  let [startHours, startMinutes] = useTimeFormatter(startTime);
  let [endHours, endMinutes] = useTimeFormatter(endTime);

  return [startHours, startMinutes, endHours, endMinutes];
};

export default useInitialTimeNums;
