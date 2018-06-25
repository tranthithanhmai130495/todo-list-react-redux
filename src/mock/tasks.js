const uuidv4 = require('uuid/v4');

let items = [
  {
      id: uuidv4(),
      name: 'Angular',
      level: '0'
  },
  {
      id: uuidv4(),
      name: 'Reactjs',
      level: '2'
  }, 
  {
      id: uuidv4(),
      name: 'Nodejs',
      level: '0'
  },
  {
      id: uuidv4(),
      name: 'Vuejs',
      level: '1'
  },
  {
      id: uuidv4(),
      name: 'PHP - Laravel',
      level: '2'
  }, 
]

export default items;