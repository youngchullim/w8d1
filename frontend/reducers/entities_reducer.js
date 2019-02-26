import { combineReducers } from 'redux';
import UserReducer from './user_reducer';

const entitiesReducer = combineReducers({
  users: UserReducer
});

export default entitiesReducer;
