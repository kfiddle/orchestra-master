import classes from "./ExtraType.module.css";

const ExtraTypeBox = (props) => {
  const contracted = props.contracted;

  return <div>{contracted? 'I will be a box': 'I am cooler than that'}</div>;
};

export default ExtraTypeBox;
