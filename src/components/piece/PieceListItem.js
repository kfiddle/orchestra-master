import { useContext } from "react";

// import InstrumentsList from '../../store/instruments-list';

import classes from './PieceListItem.module.css';

const PieceListItem = (props) => {
  
//   const { pieceToList, clickedPieceList } =
    // useContext(piecesList);
  const name = props.piece.title;

//   let outerContainerClass = classes.pieceItemDiv;

//   for (let instr of clickedPieceList) {
//     if (instr === props.piece) {
//       outerContainerClass = classes.clickedItem
//     }
//   }
  
//   const clickHandler = () => {
//     pieceToList(props.piece)
//   };

  return (
    <div onClick={clickHandler} className={outerContainerClass}>
      <div className={classes.titleDiv}>{title}</div>
    </div>
  );
};

export default PieceListItem;
