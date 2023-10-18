import Inst from './Inst';
import Address from './Address.js';

class Player {
  constructor(id, first, last) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.primaryInst = null;
    this.insts = [];
    this.type = '';
    this.email = '';
    this.phone = '';
    this.rank = 0;
    this.address = null;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  setRank(rank) {
    this.rank = rank;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  addInst(inst) {
    if (this.insts.length === 0) this.primaryInst = inst;
    this.insts.push(inst);
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }
}

export default Player;
