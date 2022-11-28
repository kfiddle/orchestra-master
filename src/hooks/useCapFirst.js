const useCapFirst = () => {
  return (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();
};

export default useCapFirst;
