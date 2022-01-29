import styles from "./AdjustPanel.module.css";

const AdjustPanel = (props) => {
const numberToShow = props.number;

  return <div>{numberToShow}</div>;
};

export default AdjustPanel;
