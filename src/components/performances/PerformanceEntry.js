
import Modal from "../UI/modal/Modal";

const PerformanceEntry = (props) => {
  return (
    <Modal closeModal={props.closeModal}>
      <div>A new performance will live here</div>
    </Modal>
  );
};

export default PerformanceEntry;
