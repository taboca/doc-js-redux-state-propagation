import * as types from './actionTypes';

/* Example of async with thunk.. */

export function command_section_b_bar() {
  return function (dispatch) {
    dispatch({
      type  : types.SECTION_B_ACTION_BAR,
    });
  }
}
