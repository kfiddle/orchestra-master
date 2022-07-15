import styles from "./SinglePartAdjuster.module.css";

const SinglePartAdjuster = ({ part }) => {
  const { instrument, rank, specialDesignate } = part;
  const instName = instrument.name;

  let rankOrDesignate;

  if (rank > 0) {
    rankOrDesignate = rank;
  } else if (specialDesignate !== null) {
    rankOrDesignate = "ASSIST";
  }

  return (
    <div>
      {instName} {rankOrDesignate}
    </div>
  );
};

export default SinglePartAdjuster;
