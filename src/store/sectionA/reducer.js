// reducer for the domain
// from https://github.com/wix-incubator/react-dataflow-example/blob/master/src/store/topics/reducer.js

import * as types from './actionTypes';

const defaultState = {
  state_foo: 1
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    case types.SECTION_A_ACTION_FOO:
      return Object.assign({}, state, {
        state_foo : state.state_foo+1,
      });
    default:
      return state;
  }
}
