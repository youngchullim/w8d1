import { combineReducers } from 'redux';
import UserReducer from './user_reducer';

const entitiesReducer = combineReducers({
  user: UserReducer
});

export default entitiesReducer;
