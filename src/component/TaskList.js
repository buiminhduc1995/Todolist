import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleText = event => {
    this.setState({ value: event.target.value });
    this.props.searchNow(this.state.value)
  };
  render() {
    const { taskArray } = this.props;
    const elementTask = taskArray.map((task, index) => {
      return (
        <TaskItem
          key={task.taskName}
          index={index}
          task={task}
          deleted={this.props.deleted}
          editItemProps={this.props.edit}
          updateStatusFast={this.props.updateStatus}
        />
      );
    });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="value"
                value={this.state.value}
                onChange={this.handleText}
              />
            </td>
            <td>
              <select className="form-control">
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>

          {elementTask}
        </tbody>
      </table>
    );
  }
}
export default TaskList;
