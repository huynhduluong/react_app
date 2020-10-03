import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /**
   * isLogin là thuộc tính của class
   * true: đã đăng nhập => hiện tên người dùng
   * false: chưa đăng nhập => hiện nút login
   */
  //state là trạng thái của component
  //khi thay đổi state thì hàm renderLogin tự động cập nhật lại
  state = {
    isLogin: false,
  };
  //   isLogin = false;

  loginUser = () => {
    // this.state.isLogin = true;
    this.setState({
        isLogin: true,
    });
  };
  //phương thức của class
  renderLogin = () => {
    //cách 1 dùng if else
    if (this.state.isLogin) {
      return <p>Huỳnh Du Lượng</p>;
    } else {
      return <button>Login</button>;
    }
    //cách 2 dùng toán tử 3 ngôi
    //Đk ? xử lý đúng : xử lý sai
    // return this.isLogin ? <p>Huỳnh Du Lượng</p> : <button>Login</button>;
  };

  render() {
    return (
      <div>
        <h2>Conditional and State</h2>
        <div>{this.renderLogin()}</div>
        <button onClick={this.loginUser}>Đăng nhập</button>
      </div>
    );
  }
}
