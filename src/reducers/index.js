import { combineReducers } from 'redux';
import isShowForm  from './isShowForm';
import sort  from './sort';
import items  from './items';
import search  from './search';

let appReducers = combineReducers({
  isShowForm,
  sort,
  items,
  search,
});

export default appReducers;
