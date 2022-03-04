const useDateFormatter = (date) => {
  if (date) {
    let year = date.slice(2, 4);
    let month = date[5] === "0" ? date.slice(6, 7) : date.slice(5, 7);
    let day = date[8] === "0" ? date.slice(9, 10) : date.slice(8, 10);

    return `${month}/${day}/${year}`;
  }
  return "no date";
};

export default useDateFormatter;
