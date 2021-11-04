import { useState } from "react";

import classes from "./LibrarySortHeader.module.css";

const sortOptions = [
  "Composer",
  "Title",
  "Arranger",
  "Publisher",
  "Library Catalog",
];

const LibrarySortHeader = (props) => {
  const [clickedOption, setClickedOption] = useState('');

  const clickedOptionHandler = (option) => {
    setClickedOption(option);
    props.sorter(option)
  }

  const displayableSortOptions = sortOptions.map((option) => (
    <div
      key={sortOptions.indexOf(option)}
      className={option != clickedOption? classes.optionDiv : classes.clickedOption}
      onClick={() => clickedOptionHandler(option)}
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
