import * as  types from './../constants/ActionTypes.js';
let defaultStore = '';
  
let search = (state = defaultStore, action) => {
  switch(action.type) {
    case types.CHANGE_SEARCH:
      return action.search
    default: 
      return state;
  }
}

export default search;