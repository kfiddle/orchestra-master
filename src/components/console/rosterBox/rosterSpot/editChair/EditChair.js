import useFetch from '../../../../../hooks/useFetch';

import Modal from "../../../../UI/modal/Modal";

import styles from "./EditChair.module.css";

const EditChair = (props) => {
  const closeModal = props.closeModal;
  const pic = props.pic;
  const { chair } = pic;
  const { parts, rank } = chair;

  const pusher = useFetch();

  const deleteChair = async () => {
    const response = await pusher(pic, "delete-pic");
    if (response !== "phoey") {
      closeModal();
    }
  };

  const styleObject = { height: "15rem" };

  return (
    <Modal closeModal={props.closeModal} styleObject={styleObject}>
      <div>
        {parts[0]} {rank}
      </div>
      <button className={styles.button} onClick={deleteChair}>
        Remove Chair
      </button>
    </Modal>
  );
};

export default EditChair;
