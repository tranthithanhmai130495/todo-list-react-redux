import { combineReducers } from 'redux';
import isShowForm  from './isShowForm';
import sort  from './sort';
import items  from './items';
import search  from './search';
import itemSelected  from './itemSelected';

let appReducers = combineReducers({
  isShowForm,
  sort,
  items,
  search,
  itemSelected
});

export default appReducers;
