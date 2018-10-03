import * as types from './actionTypes';

/* Example of async with thunk.. */

export function command_section_a_foo() {
  return function (dispatch) {
    dispatch({
      type  : types.SECTION_A_ACTION_FOO,
    });
  }
}
