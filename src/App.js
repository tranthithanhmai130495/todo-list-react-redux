import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, remove, reject } from 'lodash';
import tasks from './mock/tasks';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items        : [],
      isShowForm   : false,
      strSearch    : '',
      orderBy      : 'name',
      orderDir     : 'asc',
      itemSelected : null
    };

    this.handleDelete       = this.handleDelete.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleEdit         = this.handleEdit.bind(this);
  }


  componentWillMount() {
    let items = JSON.parse(localStorage.getItem('task',items));
    if(items === null ) {
      items= localStorage.setItem('task','null');
      items= localStorage.getItem('task');
    } else {
      this.setState({
        items: items
      })
    }
  }


  handleDelete(id) {
    let items = this.state.items;
    remove(items, (item)=> {
      return item.id === id
    });

    this.setState({
      items: items
    })

    localStorage.setItem('task',JSON.stringify(items));
  }

  handleSubmit(item){
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

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm   : true,
    })
  }


  render() {
    let {itemSelected } = this.state;
    
    return (
      <div>
        <Title />
        <Control
        />

        <Form 
          itemSelected={ itemSelected }
          onClickSubmit= {this.handleSubmit} 
        />
        <List 
          onClickDelete = {this.handleDelete}
          onClickEdit = {this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
