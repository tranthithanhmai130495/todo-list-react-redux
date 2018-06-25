import { createStore } from 'redux';
import { actCloseForm, actOpenForm, actToggleForm } from './actions/index';

let defaultStore = {
  items        : [],
  isShowForm   : true,
  strSearch    : '',
  orderBy      : 'name',
  orderDir     : 'asc',
  itemSelected : null
}

let appReducers = (state = defaultStore, action) => {
  
  switch(action.type) {
    case 'CLOSE_FORM':
      state.isShowForm = false;
      return state;

    case 'OPEN_FORM':
      state.isShowForm = true;
      return state;

    case 'TOGGLE_FORM':
      state.isShowForm = !state.isShowForm;
      return state;

    default: 
      return state;
  }

  return state;
}

const store = createStore(appReducers);

console.log("Init code ", store.getState()); // true

//CLOSE FORM 

store.dispatch(actCloseForm());

console.log("CLOSE FORM: ", store.getState()); // false

//TOGGLE FORM
store.dispatch(actToggleForm());

console.log("TOGGLE  FORM: ", store.getState()); // false

//OPEN FORM 
store.dispatch(actOpenForm());

console.log("OPEN FORM: ", store.getState()); //true 

export default store;