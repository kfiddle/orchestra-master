import useClockFormatter from "./useClockFormatter";

const useServiceFormatter = () => {
  const clockFormatter = useClockFormatter();

  return (service) => {
    let displayEvent = "Concert";
    if (service.event === "REHEARSAL") displayEvent = "Rehearsal";

    let displayLocation = service.location ? service.location : ' Location TBD'

    const date = new Date(service.date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return `<div><span style='font-weight:bold'>${displayEvent}:</span> 
    ${date}
    ${clockFormatter(service.startTime)}
    ${'- ' + displayLocation}
    </div>`;
  };
};

export default useServiceFormatter;
