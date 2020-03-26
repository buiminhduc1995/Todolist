import React, { Component } from "react";
class TaskItem extends Component {
  deletedItem = ()=>{
    this.props.deleted(this.props.index)
  }
  editItem =()=>{
    this.props.editItemProps(this.props.index)
  }
  updateStatusFast = ()=>{
    this.props.updateStatusFast(this.props.task)
  }
  render() {
    const {index,task}=this.props
    return ( 
      <tr>
        <td>{index}</td>
        <td>{task.taskname}</td>
        <td class="text-center">
          <span class="label label-success" onClick={()=>this.updateStatusFast()}>{task.status===true?"Kích hoạt":"Ẩn"}</span>
        </td>
        <td class="text-center">
          <button onClick={()=>this.editItem()} type="button" class="btn btn-warning">
            <span class="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button onClick={()=>this.deletedItem()} type="button" class="btn btn-danger">
            <span class="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;
