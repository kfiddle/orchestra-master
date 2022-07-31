
import classes from "./LogSortHeader.module.css";

const LogSortHeader = ({ sortOpts, chosenSort, setChosenSort }) => {
  const clickedOptionHandler = (option) => {
    setChosenSort(option);
  };

  const displayableSortOptions = sortOpts.map((option) => (
    <div
      key={sortOpts.indexOf(option)}
      className={
        option != chosenSort ? classes.optionDiv : classes.clickedOptionDiv
      }
      onClick={() => clickedOptionHandler(option)}
    >
      <li className={classes.optionText}>{option}</li>
    </div>
  ));

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>{displayableSortOptions}</nav>
    </header>
  );
};

export default LogSortHeader;
