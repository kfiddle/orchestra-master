import Adjuster from "./Adjuster";
import styles from "./StringsAdjusters.module.css";

const StringsAdjusters = ({ strings }) => {
  const sections = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];

  const countOf = (stringPart) => {
    return strings.filter(
      (pic) => pic.primaryPart.instrument.name === stringPart
    ).length;
  };

  const displayableAdjusters = sections.map((section) => (
    <Adjuster
      key={sections.indexOf(section)}
      section={section}
      count={countOf(section)}
    />
  ));
  return (
    <div className={styles.outerContainer}>
      {displayableAdjusters}
    </div>
  );
};

export default StringsAdjusters;
