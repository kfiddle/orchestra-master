import useClockFormatter from "./useClockFormatter";

const useServiceFormatter = () => {
  const clockFormatter = useClockFormatter();

  // if there is service.endtime, write "7:30 to 10:00"
  // if not, write "8:00"

  return (service) => {
    let displayEvent = "Concert";
    if (service.event === "REHEARSAL") displayEvent = "Rehearsal";

    const date = new Date(service.date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    let displayTime = service.endTime
      ? `${clockFormatter(service.startTime)} to ${clockFormatter(
          service.endTime
        )}`
      : `${clockFormatter(service.startTime)}`;

    let displayLocation = service.location ? service.location : " Location TBD";

    return `<tr>
          <td style='font-weight:bold;'>${displayEvent}: </td>
          <td style='padding-right:1rem;'>${date}</td>
          <td style='padding-right:1rem;'>${displayTime}</td>
          <td>${"- " + displayLocation}</td>
        </tr>`;
  };
};

export default useServiceFormatter;
