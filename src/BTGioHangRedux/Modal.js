import React, { Component } from "react";
import { connect } from "react-redux";
import CardItem from "./CardItem";

class Modal extends Component {
  renderCardList = () => {
    return this.props.danhSachGioHang.map((cart, index) => {
      console.log(cart);
      return <CardItem key={index} cart={cart} />;
    });
  };

  renderTongTien = () => {
    if (this.props.danhSachGioHang.length === 0) {
      return;
    }
    let tongTien = this.props.danhSachGioHang.reduce(
      (sum, sanPham) => (sum += sanPham.soLuong * sanPham.giaThanh),
      0
    );
    return (
      <tr>
        <td colSpan="4"></td>
        <td className="text-center">Tổng tiền</td>
        <td>{tongTien}</td>
      </tr>
    );
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        aria-labelledby="modelTitleId"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCardList()}
                  {this.renderTongTien()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGioHang: state.gioHangReducer.danhSachGioHang,
  };
};

export default connect(mapStateToProps, null)(Modal);
