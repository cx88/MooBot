class Enum {
  constructor(indexes) {
    this.list = indexes;
    this.revlist;
    for (let prop in indexes) {
      this.revlist[indexes[prop]] = prop;
    }
  }
}

module.exports = Enum;