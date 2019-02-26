import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const UserReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let state = merge({}, oldState, {[action.user.id]: action.user});
      return state;
    default:
      return oldState;
  }
};

export default UserReducer;