import React, { Component } from "react";
class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      value:''
    }
  }
  handerInput = (event)=>{
    this.setState({value:event.target.value})
  }
  log =()=>{
    this.props.findItem(this.state.value)
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            value={this.state.value}
            onChange={(e)=>this.handerInput(e)}
            name="value"
          />
          <span className="input-group-btn">
            <button onClick={()=>this.log()} className="btn btn-primary" type="button">
              <span className="fa fa-search mr-5"></span>Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}
export default Search;
