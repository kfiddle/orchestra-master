const useServiceFormatter = () => {
  // service has a date (formatted)
  // service has a start time
  // service has an event type
  // service has a location
  // service MAY have an endtime

  return (service) => {
    const date = new Date(service.date)
    return date.getDay() + '    ' + date.getMonth();
  };
};

export default useServiceFormatter;
