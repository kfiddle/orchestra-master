import LogEvent from "./LogEvent";
import styles from "./LogEvents.module.css";

const LogEvents = ({ events }) => {
  console.log(events);
  const displayableEvents = events.map((logEvent) => (
    <LogEvent key={events.indexOf(logEvent)} logEvent={logEvent} />
  ));
  return <div>{displayableEvents}</div>;
};

export default LogEvents;
