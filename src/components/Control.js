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
    return (
        <div className="row">
          <Search/>
          <Sort 
          /> 
          <ToggleForm />
        </div>
    );
  }
}

export default Control;
