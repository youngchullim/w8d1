import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
});

export default rootReducer;