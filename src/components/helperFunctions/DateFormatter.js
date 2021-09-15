const DateFormatter = (date) => {
  let year = "";
  let month = "";
  let day = "";

  if (date) {
    year = date.slice(2, 4);
    month = date[5] === "0" ? date.slice(6, 7) : date.slice(5, 7);
    day = date[8] === "0" ? date.slice(9, 10) : date.slice(8, 10);

    return `${month}/${day}/${year}`;
  } else {
    return "no date";
  }
};

export default DateFormatter;
