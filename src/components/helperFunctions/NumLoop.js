const NumLoop = (num, func) => {
  for (let j = 1; j <= num; j++) {
    func(j);
  }
};

export default NumLoop;

// const makeChair = (j) => {
//     let chairToSend = {
//         piece: pieceShow.piece,
//         show: pieceShow.show,
//         parts: [{ instrument: { name: instrument }, rank: j }],
//       };

//       let response = await pusher(chairToSend, "add-scoreline");
// }
// intLoop(7, makeChair);
