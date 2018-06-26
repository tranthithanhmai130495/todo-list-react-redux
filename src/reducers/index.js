import { combineReducers } from 'redux';
import isShowFormReducer  from './isShowFormReducer';
import sortReducer  from './sortReducer';
  
let appReducers = combineReducers({
  isShowForm: isShowFormReducer,
  sort: sortReducer
});

export default appReducers;
