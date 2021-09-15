import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from './PieceEntry.module.css';

const PieceEntry = (props) => {
  let id = "";
  let title = "";
  let composer = "";

  const titleRef = useRef();
  const composerRef = useRef();

  if (props.piece) {
    id = props.piece.id;
    title = props.piece.title;
    composer = props.piece.composer;
  }

  const submitPiece = async (event) => {
    event.preventDefault();

    const pieceToSendUp = {
      title: titleRef.current.value,
      composer: composerRef.current.value,
    };

    let response = await PushBasic(pieceToSendUp, "add-piece");
    if (response.ok) {
      props.closeModal();
    }
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <div className={classes.control}>
            <label>Piece Title</label>
            <input type="text" ref={titleRef} placeholder={title} />
          </div>

          <div className={`${classes.control} ${classes.dateDiv}`}>
            <label htmlFor="date">Composer</label>
            <input type="text" ref={composerRef} />
          </div>

          <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={submitPiece}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PieceEntry;
