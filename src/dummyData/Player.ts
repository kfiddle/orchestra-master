import Inst from './Inst';
import Address from './Address';

class Player {
  first: String;
  last: String;
  insts: Inst[];
  type: String;
  email: String;
  rank: Number;
  address: Address;

  constructor(first: String, last: String) {
    this.first = first;
    this.last = last;
    this.insts = [];
  }

  setType(type: String) {
    this.type = type;
    return this;
  }

  setRank(rank: Number) {
    this.rank = rank;
    return this;
  }

  setEmail(email: String) {
    this.email = email;
    return this;
  }

  addInst(inst: Inst) {
    this.insts.push(inst);
    return this;
  }

  setAddress(address: Address) {
    this.address = address;
    return this;
  }
}

export default Player;
