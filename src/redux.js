import { createStore } from 'redux';
import appReducers from './reducers/index';
import { actCloseForm, actOpenForm, actToggleForm, actSort } from './actions/index';


const store = createStore(appReducers);

console.log("Init code ", store.getState()); // true

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