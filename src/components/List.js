import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { filter, includes } from 'lodash';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let items  = this.props.itemsTodo;
    let search = this.props.search;
    
    //console.log("Search ne:" +search);

    let itemsOrigin = (items !=null) ? [...items]: [];

    //Search
    items = filter(itemsOrigin, (item) =>{
      return includes(item.name.toLowerCase(), search.toLowerCase());
    });

    let eleItem = <tr><th colSpan={4}>Không có công việc</th></tr>
    
    if (items.length > 0) {
      eleItem = items.map((item, index) => {
        return (
          <Item onClickDelete ={this.props.onClickDelete} 
            key={ index } 
            item = {item} indexNumber = {index}
            onClickEdit = {this.props.onClickEdit}
          />
        )
      });
    }
    
    return (
        <div className="panel panel-success">
          <div className="panel-heading">List Task</div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Task</th>
                <th className="text-center">Level</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              { eleItem }
            </tbody>
          </table>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsTodo: state.items,
    search: state.search
  }
}

export default connect(mapStateToProps, null) (List);