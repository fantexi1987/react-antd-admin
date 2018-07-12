import { combineReducers } from 'redux';
import auth from './auth';
import menu from './menu';
import language from './language';

const rootReducer = combineReducers({
  auth,
  menu,
  language
});

export default rootReducer;
