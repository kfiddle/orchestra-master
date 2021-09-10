import Modal from "../UI/modal/Modal";

const PieceEntry = (props) => {
  return (
    <Modal closeModal={props.closeModal}>
      <div>A new piece will live here</div>
    </Modal>
  );
};

export default PieceEntry;
