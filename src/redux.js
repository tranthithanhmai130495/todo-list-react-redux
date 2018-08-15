import { createStore } from 'redux';
import appReducers from './reducers/index';
import { actCloseForm, actOpenForm, actToggleForm, actSort } from './actions/index';

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Init code ", store.getState()); // true

store.subscribe(() =>
  console.log(store.getState())
)

//OPEN FORM 
store.dispatch(actOpenForm());

console.log("OPEN FORM: ", store.getState()); //true

//CLOSE FORM 
store.dispatch(actCloseForm());

console.log("CLOSE FORM: ", store.getState()); // false

//TOGGLE FORM
store.dispatch(actToggleForm());

console.log("TOGGLE FORM: ", store.getState()); // false

//CHANGE SORT
store.dispatch(actSort('level', 'desc'));

console.log("SORT_ITEM:", store.getState()); //true 


export default store;