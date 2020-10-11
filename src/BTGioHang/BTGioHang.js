import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";

//1. dàn layout
//2. xác nhận data thay đổi và lưu vào state
//3. Lấy data trong state đi binding ra jsx
//4. Render mảng dữ liệu
//5. xây dựng chức năng xem chi tiết
//6. xây dựng chức năng thêm giỏ hàng
//7. xây dựng chức năng xóa sản phẩm
//8. Tăng giảm số lượng
//9. xây dựng chức năng hiện thị tổng số sản phẩm

export default class BTGioHang extends Component {
  danhSachSanPham = [
    {
      maSP: "1",
      giaThanh: 22000000,
      tenSP: "Iphone XS Max",
      linkAnh: "./img/applephone.jpg",
      manHinh: `"OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "iOS 14.0 ",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
    {
      maSP: "2",
      giaThanh: 12000000,
      tenSP: "Meizu 16Xs",
      linkAnh: "./img/meizuphone.jpg",
      manHinh: `"AMOLED, FHD+ 2232 x 1080 pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
    {
      maSP: "3",
      giaThanh: 15000000,
      tenSP: "VinSmart Live",
      linkAnh: "./img/vsphone.jpg",
      manHinh: `"AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: "1",
      linkAnh: "./img/applephone.jpg",
      manHinh: `"OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
    danhSachGioHang: [],
  };

  handleFindIndex = (sanPham, danhSachGioHang) => {
    return danhSachGioHang.findIndex((item) => {
      return item.maSP === sanPham.maSP;
    });
  };

  handleAddSanPham = (sanPham) => {
    //setState
    let danhSachGioHang = [...this.state.danhSachGioHang];
    /**
     * tìm xem có tồn tại trong mảng hay không
     * nếu có thì trả về index
     * nếu không thì trả về -1
     */
    let index = this.handleFindIndex(sanPham, danhSachGioHang);
    // danhSachGioHang.push(sanPham);
    if (index !== -1) {
      //tìm thấy
      //cập nhật số lượng
      danhSachGioHang[index].soLuong++;
    } else {
      //không tìm thấy
      // set số lượng + push vào mảng
      sanPham.soLuong = 1;
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }

    this.setState({
      danhSachGioHang,
    });
  };

  handleDetail = (sanPham) => {
    //setState
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  handleDeleteCart = (cart) => {
    let danhSachGioHang = [...this.state.danhSachGioHang];
    danhSachGioHang = danhSachGioHang.filter((item) => cart.maSP !== item.maSP);

    this.setState({
      danhSachGioHang,
    });
  };

  renderSoLuongGioHang = () => {
    return this.state.danhSachGioHang.reduce(
      (sum, sanPham) => sum += sanPham.soLuong,
      0
    );
  };

  handleTangGiamSoLuong = (cart, status) => {
    /**
     * Các bước thực hiện
     * 1. Lấy mảng giỏ hàng
     * 2. tìm vị trí của phần tử được nhấn
     * 3. check tăng hay giảm (status)
     * 4. cập nhật lại state
     */
    //destructuring
    let { danhSachGioHang } = this.state;
    let index = this.handleFindIndex(cart, danhSachGioHang);

    if (status) {
      danhSachGioHang[index].soLuong++;
    } else {
      if (danhSachGioHang[index].soLuong > 1) {
        danhSachGioHang[index].soLuong--;
      }
    }

    this.setState({
      danhSachGioHang,
    });
  };

  renderTongTien = () => {
    if (this.state.danhSachGioHang.length === 0) {
      return;
    }
    let tongTien = this.state.danhSachGioHang.reduce(
      (sum, sanPham) => sum += sanPham.soLuong * sanPham.giaThanh,
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

  renderSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            sanPham={sanPham}
            handleDetail={this.handleDetail}
            handleAddSanPham={this.handleAddSanPham}
          />
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

          <Modal
            danhSachGioHang={this.state.danhSachGioHang}
            handleDeleteCart={this.handleDeleteCart}
            handleTangGiamSoLuong={this.handleTangGiamSoLuong}
            renderTongTien={this.renderTongTien}
          />

          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.linkAnh}
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh} </td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td> {this.state.sanPhamChiTiet.heDieuHanh} </td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td> {this.state.sanPhamChiTiet.camTruoc} </td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td> {this.state.sanPhamChiTiet.camSau} </td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td> {this.state.sanPhamChiTiet.ram} </td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td> {this.state.sanPhamChiTiet.rom} </td>
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
