import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, remove, reject } from 'lodash';
import tasks from './mock/tasks';
import * as  config  from './constants/config.js';

const uuidv4 = require('uuid/v4');

class App extends Component {

  state = {
    items        : [],
    isShowForm   : false,
    strSearch    : '',
    orderBy      : 'name',
    orderDir     : 'asc',
    itemSelected : null
  };

  componentWillMount() {
    let items = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STOGARE,items));
    if(items === null ) {
      items= localStorage.setItem('task','null');
      items= localStorage.getItem('task');
    } else {
      this.setState({
        items: items
      })
    }
  }


  /*handleSubmit(item){
    let { items } = this.state;
    let id = null ;


    if(item.id !== '') {
      items = reject(items, {id: item.id});
      items.push({
        id: item.id,
        name: item.name,
        level: item.level
      })
      
    } else {
      items.push({
        id: uuidv4(),
        name: item.name,
        level: item.level
      })
    }

    this.setState({
      items: items,
      isShowForm : false
    })

    localStorage.setItem('task', JSON.stringify(items));
  }
  */

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm   : true,
    })
  }


  render() {
    return (
      <div>
        <Title />
        <Control
        />

        <Form />
        <List />
      </div>
    );
  }
}

export default App;
