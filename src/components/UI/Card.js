import { AiOutlineClose } from "react-icons/ai";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <AiOutlineClose className={classes.closeIcon} />
      {props.children}
    </div>
  );
};

export default Card;
