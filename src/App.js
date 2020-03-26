import React, { Component } from "react";
import "./App.css";
import TaskForm from "./component/TaskForm";
import Search from "./component/Search";
import Sort from "./component/Sort";
import TaskList from "./component/TaskList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      taskArray: [],
      itemUpdate: {},
      text: false,
      id: "",
      searchText:''
    };
  }
  openFrom = () => {
    this.setState({ isShow: !this.state.isShow, text: false });
  };
  actionCloseFrom = () => {
    this.setState({ isShow: false });
  };
  onSubmit = (taskname, status, id) => {
    if (id === "") {
      this.setState({
        taskArray: [...this.state.taskArray, { taskname, status }]
      });
    } else {
      this.state.taskArray[id].taskname = taskname;
      this.state.taskArray[id].status = status;
      this.setState({ taskArray: [...this.state.taskArray] });
    }
  };
  deletedItem = e => {
      let data = this.state.taskArray;
      data.splice(e, 1);
      this.setState({ taskArray: data });
  };
  editItem = e => {
    this.setState({
      itemUpdate: this.state.taskArray[e],
      text: true,
      isShow: true,
      id: e
    });
  };
  updateStatus = e => {
    e.status = !e.status;
    this.setState({ taskArray: [...this.state.taskArray] });
  };
  find = e => {
    this.setState({ searchText: e });
  };
  searchNow = (e)=>{
    console.log('====================================')
    console.log(e)
    console.log('====================================')
  }
  render() {
    const { isShow, taskArray, itemUpdate, text, id,searchText } = this.state;
    let danhsach = taskArray.filter((item) => {
      return item.taskname.toLowerCase().match(searchText.trim().toLowerCase());
    });

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {isShow && (
            <TaskForm
              closeFrom={() => this.actionCloseFrom()}
              onSubmit={this.onSubmit}
              item={itemUpdate}
              text={text}
              id={id}
            />
          )}
          <div
            className={
              isShow
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              onClick={() => this.openFrom()}
              type="button"
              className="btn btn-primary"
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <Search findItem={this.find} />
              <Sort />
            </div>
            <div className="row mt-15">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  taskArray={danhsach}
                  deleted={this.deletedItem}
                  edit={this.editItem}
                  updateStatus={this.updateStatus}
                  searchNow={this.searchNow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
