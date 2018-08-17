let defaultStore = {orderBy: 'level', orderDir: 'asc'}
  
let sort = (state = defaultStore, action) => {
  let {orderBy, orderDir} = action; 
  switch(action.type) {
    case 'SORT_ITEM':
      return {orderBy, orderDir}
      
    default: 
      return state;
  }
}

export default sort;
