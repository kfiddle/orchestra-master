import useFetch from "../../../../../hooks/useFetch";

import Modal from "../../../../UI/modal/Modal";

import styles from "./EditChair.module.css";

const EditChair = ({ closeModal, pic }) => {
  const { chair } = pic;
  const { parts } = chair;

  const pusher = useFetch();

  console.log(parts);

  const deleteChair = async () => {
    const response = await pusher(pic, "delete-pic");
    if (response !== "phoey") {
      closeModal();
    }
  };

  const displayableParts = parts.map((part) => (
    <div key={parts.indexOf(part)}>
      {part.instrument.name} {part.rank}
    </div>
  ));

  const styleObject = { height: "15rem" };

  return (
    <Modal closeModal={closeModal} styleObject={styleObject}>
      <div>{displayableParts}</div>
      <button className={styles.button} onClick={deleteChair}>
        Remove Chair
      </button>
    </Modal>
  );
};

export default EditChair;
