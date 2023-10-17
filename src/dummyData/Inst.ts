class Inst {
  name: string;
  abbrev: string | undefined;
  scoreOrder: number | undefined;

  constructor(name: string, abbrv?: string, scoreOrder?: number) {
    this.name = name;
    this.abbrev = abbrv;
    this.scoreOrder = scoreOrder;
  }

  setName(name: string) {
    this.name = name;
  }

  setAbbrv(abbrv: string) {
    this.abbrev = abbrv;
  }

  setScoreOrder(scoreOrder: number) {
    this.scoreOrder = scoreOrder;
  }
}

export default Inst;
