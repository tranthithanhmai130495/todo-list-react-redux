import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm'

class Control extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd () {
    this.props.onClickAdd();
  }
  
  render() {
    let { orderBy, orderDir } = this.props;

    return (
        <div className="row">
          <Search onClickGo = {this.props.onClickSearchGo}/>
          <Sort 
              orderBy = {orderBy}
              orderDir = {orderDir}
              onClickSort = {this.props.onClickSort}
          /> 
          <ToggleForm />
        </div>
    );
  }
}

export default Control;
