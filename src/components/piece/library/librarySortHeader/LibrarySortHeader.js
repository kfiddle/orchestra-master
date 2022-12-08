import { useState } from "react";

import classes from "./LibrarySortHeader.module.css";

const LibrarySortHeader = ({ sorter, options }) => {
  const [clickedOption, setClickedOption] = useState("");

  const clickedOptionHandler = (option) => {
    setClickedOption(option);
    sorter(option);
  };

  const displayableSortOptions = options.map((option) => (
    <div
      key={options.indexOf(option)}
      className={
        option != clickedOption ? classes.optionDiv : classes.clickedOption
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

export default LibrarySortHeader;
