const usePieceFormatter = () => {
  return ({ piece }) => {
    const { composerName, title } = piece;
    console.log(title);

    return <div>{composerName}</div>
  };
};

export default usePieceFormatter;
