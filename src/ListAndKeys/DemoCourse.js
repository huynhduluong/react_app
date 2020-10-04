import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJS", "NodeJS", "VueJS"];

  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((course, index) => {
      return <li key={index}>{course}</li>;
    });
  };

  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh sách khóa học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
