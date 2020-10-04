import React, { Component } from "react";
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
  };
  renderSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham img={sanPham.linkAnh} name={sanPham.tenSP} ma={sanPham.maSP} />
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
              Giỏ hàng (1)
            </button>
          </div>
          <div className="container">
            <div className="row">{this.renderSanPham()}</div>
          </div>
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
                        <th>tên sản phẩm</th>
                        <th>hình ảnh</th>
                        <th>số lượng</th>
                        <th>đơn giá</th>
                        <th>thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>VinSmart Live</td>
                        <td>
                          <img src="./img/vsphone.jpg" width={50} 
                          />
                        </td>
                        <td>
                          <button>-</button>1<button>+</button>
                        </td>
                        <td>5700000</td>
                        <td>5700000</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
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
