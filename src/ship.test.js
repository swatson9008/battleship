/* eslint-disable no-undef */
import shipFactory from './ship';

describe('shipFactory stuff', () => {
  test('shows the number of hits', () => {
    const carrier = shipFactory(5, 0);
    carrier.hits = 1;
    expect(carrier.hits).toEqual(1);
  });
  test('show if a ship has been sunk', () => {
    const patrol = shipFactory(2, 1);
    patrol.hit();
    expect(patrol.isSunk).toBe(true);
  });
});
