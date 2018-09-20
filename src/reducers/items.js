import * as  types from './../constants/ActionTypes.js';
import * as  config  from './../constants/config.js';
import { remove } from 'lodash';

let defaultState = [];

let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STOGARE));
defaultState = (tasks !== null && tasks.length > 0)? tasks: defaultState;

const items = (state = defaultState, action) => {
  switch(action.type) {
    case types.DELETE_ITEM: 
        const id = action.id;
        remove(state, (item)=> {
          return item.id === id
        });
        localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE,JSON.stringify(state));
        return [...state];
    default: 
      return state;
  }
}

export default items;