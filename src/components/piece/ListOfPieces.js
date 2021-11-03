import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  return <div>{props.list.length}</div>;
};

export default ListOfPieces;
