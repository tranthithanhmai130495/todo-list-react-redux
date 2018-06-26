let defaultStore = {orderBy: 'name', orderDir: 'desc'}
  
let sortReducer = (state = defaultStore, action) => {
  let {orderBy, orderDir} = action; 
  switch(action.type) {
    case 'SORT_ITEM':
      return {orderBy, orderDir}
      
    default: 
      return state;
  }
}

export default sortReducer;
