import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";
import { connect } from "react-redux";

class BTGioHang extends Component {
  renderSoLuongGioHang = () => {
    return this.props.danhSachGioHang.reduce(
      (sum, sanPham) => (sum += sanPham.soLuong),
      0
    );
  };

  renderSanPham = () => {
    return this.props.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.renderSoLuongGioHang()})
            </button>
          </div>
          <div className="container">
            <div className="row">{this.renderSanPham()}</div>
          </div>

          <Modal />

          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.props.sanPhamChiTiet.linkAnh}
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.props.sanPhamChiTiet.manHinh} </td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td> {this.props.sanPhamChiTiet.heDieuHanh} </td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td> {this.props.sanPhamChiTiet.camTruoc} </td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td> {this.props.sanPhamChiTiet.camSau} </td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td> {this.props.sanPhamChiTiet.ram} </td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td> {this.props.sanPhamChiTiet.rom} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //key : value
    //key là props của component
    //value là state được lưu trữ trên store
    danhSachSanPham: state.gioHangReducer.danhSachSanPham,
    sanPhamChiTiet: state.gioHangReducer.sanPhamChiTiet,
    danhSachGioHang: state.gioHangReducer.danhSachGioHang,
  };
};

export default connect(mapStateToProps)(BTGioHang);
