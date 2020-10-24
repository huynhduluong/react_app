import React, { Component } from "react";
import Child from "./child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("constructor: chạy 1 lần duy nhất");
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount: chạy 1 lần duy nhất");
  }

  componentDidMount() {
    /**
     * gọi api, nhiều thứ quan trọng khác
     */
    console.log("componentDidMount - chạy 1 lần duy nhất");
  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    //cho quyền có cần update hay không
    //return true là cho phép update
    //return false là không cho update
    console.log(nextProps, nextState);
    if (nextState.number === 3) {
      return false;
    }
    return true;
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
      //phải nhận props mới thì mới chạy
    console.log(nextProps);
  }

  render() {
    console.log("render - chạy lại khi state thay đổi");
    return (
      <div>
        <h3>Life Cycle</h3>
        <h1>Number: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Tang so
        </button>
        <Child number={this.state.number} />
      </div>
    );
  }
}
