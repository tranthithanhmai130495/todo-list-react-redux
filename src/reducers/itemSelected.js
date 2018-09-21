import * as  types from './../constants/ActionTypes.js';

let defaultState = {
    id: '', name: '', level: 0
};

const itemSelected = (state = defaultState, action) => {
  switch(action.type) {
    case types.SELECT_ITEM:
        return action.item; 

    case types.UNSELECT_ITEM:
        return {id: '', name: '', level: 0}; 
         
    default: 
      return state;
  }
}

export default itemSelected;