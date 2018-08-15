import { combineReducers } from 'redux';
import isShowForm  from './isShowForm';
import sort  from './sort';
import items  from './items';

let appReducers = combineReducers({
  isShowForm,
  sort,
  items
});

export default appReducers;
