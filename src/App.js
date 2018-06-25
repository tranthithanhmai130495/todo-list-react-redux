import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import store from './redux';
import { filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash';

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

    this.handleToggleForm   = this.handleToggleForm.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleSearch       = this.handleSearch.bind(this);
    this.handleSort         = this.handleSort.bind(this);
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

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    })
  }

  handleCancelSubmit() {
    this.setState({
      isShowForm: false
    })
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    })
  }

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }

  handleDelete(id) {
    console.log(id);
    let items = this.state.items;
    remove(items, (item)=> {
      return item.id === id
    });

    //console.log(items);
    //console.log(this.state.items);

    this.setState({
      items: items
    })

    localStorage.setItem('task',JSON.stringify(items));
  }

  handleSubmit(item){
    let { items } = this.state;
    let id = null ;
    //console.log(item);

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
    //console.log(item);
    this.setState({
      itemSelected: item,
      isShowForm   : true,
    })
  }


  render() {
    console.log(store);
    let itemOrigin = this.state.items;
    let itemList = [];
    let isShowForm = this.state.isShowForm;
    let eleForm = null;
    let search = this.state.strSearch;
    let { orderBy, orderDir, itemSelected } = this.state;

    /* viet js thuan
    if(search.length>0) {
      itemOrigin.forEach ((item)=>{
        if(item.name.toLowerCase().indexOf(search) !==-1) {
          itemList.push(item);
        }
      });
    } else {
      itemList = itemOrigin;
    }
    */

    // su dung thu vien loash 
    itemList = filter(itemOrigin, (item) =>{
      return includes(item.name.toLowerCase(), search);
    });

    itemList = funcOrderBy(itemList, [orderBy], [orderDir]);

    if(isShowForm) {
      eleForm = <Form itemSelected={ itemSelected } onClickSubmit= {this.handleSubmit} onClickCancel= { this.handleCancelSubmit }/>
    }
    return (
      <div>
        <Title />
        <Control 
          onClickSearchGo = { this.handleSearch}
          onClickAdd = { this.handleToggleForm}
          isShowForm= { isShowForm }
          orderBy = {orderBy}
          orderDir = {orderDir}
          onClickSort = {this.handleSort}
        />
        { eleForm }
        <List 
          itemTodo = {itemList}
          onClickDelete = {this.handleDelete}
          onClickEdit = {this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
