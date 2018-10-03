// reducer for the domain
// from https://github.com/wix-incubator/react-dataflow-example/blob/master/src/store/topics/reducer.js

import * as types from './actionTypes';

const defaultState = {
  state_bar: 1
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    case types.SECTION_B_ACTION_BAR:
      return Object.assign({}, state, {
        state_bar : state.state_bar+1,
      });
    default:
      return state;
  }
}
