/* eslint-disable func-names */
/* eslint-disable max-len */
const shipFactory = function (name, length) {
  const ship = {};
  ship.name = name;
  ship.length = length;
  ship.hits = 0;
  ship.isSunk = function sunkC() { if (this.length === this.hits) { return this.true; } return this.false; };

  return ship;
};

module.exports = shipFactory;
