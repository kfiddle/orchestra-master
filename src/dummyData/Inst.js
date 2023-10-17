

class Inst {
  constructor(name, abbreviation, primary) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.primary = primary;
    this.isPrimary = primary === null;
  }

  getAllSecondaries(inst, allInsts) {
    return allInsts.filter((i) => i.primary === inst);
  }

  hasThisSecondary(inst, abbrv, allInsts) {
    return this.getAllSecondaries(inst, allInsts).find((i) => i.abbreviation === abbrv);
  }
}

export default Inst;
