/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
const shipFactory = function (length, hits) {
  const ship = {};
  ship.length = length;
  ship.hits = hits;
  ship.isSunk = false;
  // set sunkC(hits) { if (ship.length === ship.hits) { return true; } return false; }
  Object.defineProperty(ship, 'isSunk', {
    set() {
      if (ship.length === ship.hits) { ship.isSunk = true; } ship.isSunk = false;
    },
  });

  return ship;
};

export const carrier = shipFactory('carrier', 5, 0);
export const battleShip = shipFactory('battleship', 4, 0);
export const destroyer = shipFactory('destroyer', 3, 0);
export const submarine = shipFactory('submarine', 3, 0);
export const patrol = shipFactory('patrol', 2, 0);

module.exports = shipFactory;
