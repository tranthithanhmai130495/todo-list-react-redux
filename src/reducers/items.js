let defaultState = [];

let tasks = JSON.parse(localStorage.getItem('task',items));
defaultState = (tasks !== null && tasks.length > 0)? tasks: defaultState;

const items = (state = defaultState, action) => {
  switch(action.type) {
    case "LIST_ITEM":
      return state;
    default: 
      return state;
  }
}

export default items;