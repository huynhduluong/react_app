import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  //thuộc tính của class
  ten = "Huỳnh Du Lượng";
  lop = "FE52";

  renderName = () => {
    return <p>Tên: {this.ten}</p>;
  };

  render() {
    //biến của phương thức render
    const hinhAnh =
      "https://nld.mediacdn.vn/thumb_w/540/2019/8/3/photo-1-15648212499661517922266.jpg";
    return (
      <div>
        <h2>DemoDataBinding</h2>
        {/* <p>Tên: {this.ten}</p> */}
        {this.renderName()}
        <p>Lớp: {this.lop}</p>
        <img src={hinhAnh} alt="hinh ảnh" />
      </div>
    );
  }
}
