import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: "",
      status: false,
      id:""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      taskname: nextProps.item.taskname,
      status: nextProps.item.status,
      id:nextProps.id
    });
  }
  propCloseFrom = () => {
    this.props.closeFrom();
  };
  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  actionSubmit = event => {
    event.preventDefault();
    if(this.state.taskname.length !== 0){
      this.props.onSubmit(
        this.state.taskname,
        this.state.status === "true" ? true : false,
        this.state.id
      );
      this.props.closeFrom();
    }
    
  };
  render() {
    const { text } = this.props;
    return (
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">
              {!text ? "Thêm Công Việc" : "Cập nhật công việc"}
              <span
                onClick={() => this.propCloseFrom()}
                className="fa fa-times-circle text-right"
              ></span>
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.actionSubmit}>
              <div class="form-group">
                <label>Tên :</label>
                <input
                  type="text"
                  class="form-control"
                  name="taskname"
                  onChange={this.handleChange}
                  value={this.state.taskname}
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                class="form-control"
                required="required"
                onChange={this.handleChange}
                name="status"
                value={this.state.status}
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div class="text-center">
                <button type="submit" class="btn btn-warning">
                  Thêm
                </button>
                &nbsp;
                <button type="submit" class="btn btn-danger">
                  Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskForm;
