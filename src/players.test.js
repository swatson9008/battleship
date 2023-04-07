/* eslint-disable no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import gameBoard from './gameBoard';
import player from './players';
import comPlayer from './players';
import turnCount from './players';

test('displays the correct turn count', () => {
  comPlayer.turnDecide();
  expect(turnCount).toEqual(1);
});
