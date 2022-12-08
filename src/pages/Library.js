import ListOfPieces from "../components/piece/library/ListOfPieces";

const Library = ({ reloadFlag, setReloadFlag }) => {
  return <ListOfPieces reloadFlag={reloadFlag} setReloadFlag={setReloadFlag} />;
};

export default Library;
