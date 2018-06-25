import React, { Component } from 'react';
import Item from './Item';
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let items = this.props.itemTodo;
    //console.log(items);
    let eleItem = items.map((item, index) => {
      return (
        <Item onClickDelete ={this.props.onClickDelete} 
          key={ index } 
          item = {item} indexNumber = {index}
          onClickEdit = {this.props.onClickEdit}
        />
      )
    });
    return (
        <div className="panel panel-success" >
          <div className="panel-heading">List Task</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Task</th>
                <th className="text-center">Level</th>
                <th >Action</th>
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

export default List;