import classes from "./LibrarySortHeader.module.css";

const sortOptions = [
  "Composer",
  "Title",
  "Arranger",
  "Publisher",
  "Library Catalog",
];

const LibrarySortHeader = (props) => {
  const clickedOption = (option) => {
    console.log(option);
  };

  const displayableSortOptions = sortOptions.map((option) => (
    <div
      key={sortOptions.indexOf(option)}
      className={classes.optionDiv}
      onClick={clickedOption}
    >
      <li className={classes.optionText}>{option}</li>
    </div>
  ));

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>{displayableSortOptions}</ul>
      </nav>
    </header>
  );
};

export default LibrarySortHeader;
