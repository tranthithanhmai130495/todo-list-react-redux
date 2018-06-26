let defaultStore = true;
  
let isShowFormReducer = (state = defaultStore, action) => {
  switch(action.type) {
    case 'CLOSE_FORM':
      state = false;
      return state;

    case 'OPEN_FORM':
      state = true;
      return state;

    case 'TOGGLE_FORM':
      state = !state;
      return state;
    
    default: 
      return state;
  }
}

export default isShowFormReducer;