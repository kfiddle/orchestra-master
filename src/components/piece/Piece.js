import styles from "./Piece.module.css";

const Piece = (props) => {
  const { title, composer } = props.piece;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.titleDiv}>{title}</div>
      <div className={styles.composerDiv}>{composer}</div>
    </div>
  );
};

export default Piece;
