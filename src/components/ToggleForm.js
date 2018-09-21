import React, { Component } from 'react';
import { connect } from 'react-redux';

import {actToggleForm, actUnSelectItem } from './../actions/index';

class ToggleForm extends Component {

  toggleForm = () => {
    this.props.handleToggle();
  }
  
  render() {
    //console.log(this.props.isShowForm);
    const { isShowForm } = this.props;
    let btnName  = "Open Form ";
    let btnClass = "btn-info"; 

    if(isShowForm === true) {
      btnName = "Close Form";
      btnClass = "btn-success"; 
    }

    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button onClick= { this.toggleForm } type="button" className={`btn btn-block ${btnClass}`}>{btnName}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShowForm: state.isShowForm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleToggle: () => {
      dispatch(actToggleForm());
      dispatch(actUnSelectItem());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ToggleForm);
