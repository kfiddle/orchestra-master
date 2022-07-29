import Adjuster from "./Adjuster";
import styles from "./StringsAdjusters.module.css";

const StringsAdjusters = ({ strings, visible }) => {
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

  const classNames = visible
    ? `${styles.outerContainer} ${styles.visible}`
    : styles.outerContainer;
  return <div className={classNames}>{displayableAdjusters}</div>;
};

export default StringsAdjusters;
