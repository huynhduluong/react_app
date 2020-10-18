import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddProduct, actHandleDetail } from "../redux/actions";

class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.linkAnh} />
        <div className="card-body">
          <h4 className="card-title"> {this.props.sanPham.tenSP} </h4>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleDetail(this.props.sanPham);
            }}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    // key : value
    //key vẫn là props của component/ value là phương thức gửi action lên store
    handleDetail: (sp) => {
      dispatch(actHandleDetail(sp));
    },
    handleAddSanPham: (product) => {
      dispatch(actAddProduct(product)); //gửi action lên reducer
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
