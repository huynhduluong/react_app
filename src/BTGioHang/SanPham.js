import React, { Component } from "react";

export default class SanPham extends Component {


  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.linkAnh} />
        <div className="card-body">
          <h4 className="card-title"> {this.props.sanPham.tenSP} </h4>
          <button className="btn btn-success" onClick={() => {
            this.props.handleDetail(this.props.sanPham);
          }}
          >
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={() => {
            this.props.handleAddSanPham(this.props.sanPham);
          }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
