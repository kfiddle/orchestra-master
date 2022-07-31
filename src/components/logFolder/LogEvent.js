import styles from "./LogEvent.module.css";

const LogEvent = ({ logEvent }) => {
  console.log(logEvent);
  return <div>{logEvent.date}</div>;
};

export default LogEvent;
