import Modal from "../UI/modal/Modal";

const InstrumentEntry = (props) => {
  return (
    <Modal closeModal={props.closeModal}>
      <div>A new instrument will live here</div>
    </Modal>
  );
};

export default InstrumentEntry;
