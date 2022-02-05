import ListOfPieces from "../components/piece/library/ListOfPieces";

const Library = (props) => {
  const reloadFlag = props.reloadFlag;
  const setReloadFlag = props.setReloadFlag;

  return <ListOfPieces reloadFlag={reloadFlag} setReloadFlag={setReloadFlag} />;
};

export default Library;
